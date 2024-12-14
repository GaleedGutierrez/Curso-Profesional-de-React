import { zodResolver } from '@hookform/resolvers/zod';
import { SingUpData, singUpSchema } from '@models/index';
import { SubmitHandler, useForm } from 'react-hook-form';

import InputForm from '../InputForm';

const handleSubmitForm: SubmitHandler<SingUpData> = (data) => {
	// eslint-disable-next-line no-console
	console.log(data);
};

const SignUpForm = (): JSX.Element => {
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<SingUpData>({
		resolver: zodResolver(singUpSchema),
		mode: 'onBlur',
		defaultValues: {
			name: '',
			age: 0,
			address: '',
			zipCode: '',
			phoneNumber: '',
		},
	});

	function handleClearClick(): void {
		reset();
	}

	return (
		<form onSubmit={handleSubmit(handleSubmitForm)}>
			<InputForm
				control={control}
				error={errors.name}
				label="Name"
				name="name"
				placeholder="Juan"
				type="text"
			/>
			<br />
			<InputForm
				control={control}
				error={errors.age}
				label="Age"
				name="age"
				placeholder="32"
				type="number"
			/>
			<br />
			<InputForm
				control={control}
				error={errors.address}
				label="Address"
				name="address"
				placeholder="email@email.com"
				type="email"
			/>
			<br />
			<InputForm
				control={control}
				error={errors.zipCode}
				label="Zip Code"
				name="zipCode"
				placeholder="zzzz"
				type="zip"
			/>
			<br />
			<InputForm
				control={control}
				error={errors.phoneNumber}
				label="Phone Number"
				name="phoneNumber"
				placeholder="78951354822"
				type="number"
			/>
			<div>
				<button onClick={handleClearClick}>Clear</button>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default SignUpForm;
