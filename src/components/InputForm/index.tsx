import { InputHTMLAttributes } from 'react';
import {
	Control,
	Controller,
	FieldError,
	FieldValues,
	Path,
} from 'react-hook-form';

interface Properties<T extends FieldValues>
	extends InputHTMLAttributes<HTMLInputElement> {
	name: Path<T>;
	control: Control<T>;
	label: string;
	type: string;
	error?: FieldError;
	classNameLabel?: string;
	classNameInput?: string;
	classNameError?: string;
}

const InputForm = <T extends FieldValues>({
	control,
	error,
	label,
	name,
	type,
	classNameLabel,
	classNameInput,
	classNameError,
	...rest
}: Properties<T>): JSX.Element => (
	<label
		className={classNameLabel}
		htmlFor={name}
	>
		<span>{label}</span>
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<input
					className={classNameInput}
					id={name}
					type={type}
					{...field}
					{...rest}
				/>
			)}
		/>
		{error && <p className={classNameError}>{error.message}</p>}
	</label>
);

export default InputForm;
