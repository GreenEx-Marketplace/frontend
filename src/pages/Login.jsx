import { Form, Formik } from 'formik';

import * as Yup from 'yup';

import { Link } from 'react-router-dom';

import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Divider, Button, Typography, Box } from '@mui/material';

import styled from '@emotion/styled';

import TextField from '../components/Formik/TextField';
import PasswordInput from '../components/Formik/PasswordInput';
import SubmitButton from '../components/Formik/SubmitButton';

import { signInWithCredentials, signInWithOAuth } from '../supabase/auth';

import { useAuth } from '../context/AuthContext';

import GoogleLogo from '../assets/google-logo.svg';
import FacebookLogo from '../assets/facebook-logo.svg';

import ApplicationLogo from '../components/ApplicationLogo';

const LoginSchema = Yup.object().shape({
	email: Yup.string()
		.email('Correo inválido')
		.required('El correo es obligatorio'),
	password: Yup.string().required('La contraseña es obligatoria'),
});

const initialValues = {
	email: '',
	password: '',
};

const CustomImg = styled.img`
	width: 1.5rem;
	height: 1.5rem;
	object-fit: cover;
	margin-right: 0.5rem;
`;

const Login = () => {
	const { setUser } = useAuth();

	const handleSubmit = async (values, { setErrors, setSubmitting }) => {
		try {
			const { user } = await signInWithCredentials(
				values.email,
				values.password
			);

			if (user) {
				setUser(user);
			}
		} catch (error) {
			console.error(error);
			setErrors({
				email: 'Credenciales inválidas',
				password: 'Credenciales inválidas',
			});
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Box className='md:grid md:min-w-[100vw] md:min-h-[100vh] md:place-items-center md:bg-[#ccd6d1]'>
			<Box className='xs:min-h-full xs:min-w-full p-6 md:p-10 md:max-w-[700px] md:bg-white md:rounded-lg'>
				<Box
					className='w-full md:flex md:justify-center'
					sx={{ px: '2rem', py: '2rem' }}
				>
					<ApplicationLogo className='md:max-w-[500px]' />
				</Box>

				<Typography variant='h2' gutterBottom>
					Bienvenido de regreso
				</Typography>

				<Typography variant='body2' gutterBottom>
					Ingresa tus datos para acceder a tu cuenta o inicia sesión con Google
					o Facebook.
				</Typography>

				<Formik
					initialValues={initialValues}
					validationSchema={LoginSchema}
					onSubmit={handleSubmit}
				>
					<Form>
						<Grid2
							container
							sx={{
								gap: '1.5rem',
								width: '100%',
								mt: '2rem',
							}}
						>
							<Grid2 xs={12}>
								<TextField
									type='email'
									name='email'
									label='Correo electrónico'
									required
									fullWidth
								/>
							</Grid2>

							<Grid2 xs={12}>
								<PasswordInput
									name='password'
									label='Contraseña'
									required
									fullWidth
								/>
							</Grid2>

							<Grid2 xs={12}>
								<Typography variant='body2' textAlign='center' gutterBottom>
									¿Olvidaste tu contraseña?{' '}
									<Link
										to='/forgot-password'
										className='text-[#3c750e] font-bold'
									>
										Recupérala
									</Link>
								</Typography>

								<SubmitButton className='py-3 mt-3 font-bold' fullWidth>
									Iniciar sesión
								</SubmitButton>
							</Grid2>
						</Grid2>
					</Form>
				</Formik>

				<Divider role='presentation' className='my-6'>
					O
				</Divider>

				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
						mt: '1rem',
					}}
				>
					<Button
						className='py-2'
						variant='outlined'
						color='inherit'
						fullWidth
						onClick={() => signInWithOAuth('google')}
					>
						<CustomImg src={GoogleLogo} /> Continua con Google
					</Button>

					<Button
						className='py-2 mb-3'
						variant='contained'
						color='info'
						fullWidth
						onClick={() => signInWithOAuth('facebook')}
					>
						<CustomImg src={FacebookLogo} /> Continua con Facebook
					</Button>

					<Typography variant='body2' textAlign='center' gutterBottom>
						¿No tienes una cuenta?{' '}
						<Link to='/signup' className='text-[#3c750e] font-bold'>
							Regístrate
						</Link>
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Login;
