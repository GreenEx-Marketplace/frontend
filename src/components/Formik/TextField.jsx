import PropTypes from 'prop-types';
import { Field } from 'formik';
import { TextField as MuiTextField } from '@mui/material';

const TextField = ({
	name,
	label,
	type,
	required,
	filterPattern,
	...otherProps
}) => {
	// * Handles the input change and filters the input based on the provided pattern
	const handleChange = (event, setFieldValue) => {
		const input = event.target.value;

		if (filterPattern) {
			if (typeof filterPattern === 'string') {
				filterPattern = new RegExp(filterPattern);
			}

			const filteredInput = input.replace(filterPattern, '');
			setFieldValue(name, filteredInput);
		} else {
			setFieldValue(name, input);
		}
	};

	return (
		<Field name={name}>
			{({ field, form, meta }) => (
				<MuiTextField
					{...otherProps}
					{...field}
					label={label + (required ? ' *' : '')}
					type={type}
					error={meta.touched && Boolean(meta.error)}
					helperText={meta.touched && meta.error}
					variant='outlined'
					color='primary'
					onChange={e => {
						handleChange(e, form.setFieldValue);
					}}
				/>
			)}
		</Field>
	);
};

TextField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['text', 'email', 'password']),
	required: PropTypes.bool,
	filterPattern: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(RegExp),
	]),
};

TextField.defaultProps = {
	type: 'text',
	required: false,
	filterPattern: null,
};

export default TextField;
