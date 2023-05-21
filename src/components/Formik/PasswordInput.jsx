import PropTypes from 'prop-types';

import { useState, useCallback } from 'react';

import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import TextField from './TextField';

const PasswordInput = ({ name, label, required, ...props }) => {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = useCallback(() =>
		setShowPassword(!showPassword)
	);

	return (
		<TextField
			{...{
				name,
				label,
				required,
			}}
			type={showPassword ? 'text' : 'password'}
			InputProps={{
				endAdornment: (
					<InputAdornment position='end'>
						<IconButton
							aria-label='Toggle password visibility'
							onClick={togglePasswordVisibility}
							edge='end'
						>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				),
			}}
			{...props}
		/>
	);
};

PasswordInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	required: PropTypes.bool,
};

export default PasswordInput;
