import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import AppLogo from '../assets/app-logo-color.svg';

const ApplicationLogo = ({ className, redirect }) => {
	const img = (
		<img src={AppLogo} alt='App Logo' className='object-center object-cover' />
	);

	return redirect ? (
		<Link to='/' className={`w-full h-full ${className}`}>
			{img}
		</Link>
	) : (
		<div className={`w-full h-full ${className}`}>{img}</div>
	);
};

ApplicationLogo.propTypes = {
	className: PropTypes.string,
	redirect: PropTypes.bool,
};

ApplicationLogo.defaultProps = {
	className: '',
	redirect: false,
};

export default ApplicationLogo;
