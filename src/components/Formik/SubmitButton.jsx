import PropTypes from 'prop-types';

import { useFormikContext } from 'formik';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const SubmitButton = ({ children, ...otherProps }) => {
	const { isSubmitting, isValid } = useFormikContext();

	return (
		<Button
			type='submit'
			variant='contained'
			color='primary'
			disabled={isSubmitting || !isValid}
			endIcon={isSubmitting && <CircularProgress size={20} />}
			{...otherProps}
		>
			{children}
		</Button>
	);
};

SubmitButton.propTypes = {
	children: PropTypes.node.isRequired,
};

export default SubmitButton;
