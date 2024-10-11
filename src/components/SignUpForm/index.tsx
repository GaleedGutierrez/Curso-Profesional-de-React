import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Properties {
	dummy: string;
}

interface FormData {
	name: string;
	age: string;
	address: string;
	zipcode: string;
	phone: string;
}

const handleSubmitForm: SubmitHandler<FormData> = (data) => {
	// eslint-disable-next-line no-console
	console.log(data);
};

const SignUpForm: FC<Properties> = () => {
	const { register, handleSubmit, reset } = useForm<FormData>();

	function handleClearClick(): void {
		reset();
	}

	return (
		<form onSubmit={handleSubmit(handleSubmitForm)}>
			<label htmlFor="">
				<span>Name</span>
				<input
					id=""
					name=""
					placeholder="Your name"
					type="text"
					{...(register('name'), { required: true })}
				/>
			</label>
			<br />
			<label htmlFor="">
				<span>Age</span>
				<input
					id=""
					placeholder="Your age"
					type="number"
					{...(register('age'), { required: true })}
				/>
			</label>
			<br />
			<label htmlFor="">
				<span>Address</span>
				<input
					autoComplete="street-address"
					id=""
					placeholder="Your address"
					type="text"
					{...(register('address'), { required: true })}
				/>
			</label>
			<br />
			<label htmlFor="">
				<span>Zip code</span>
				<input
					autoComplete="postal-code"
					id=""
					placeholder="Your Zip code"
					type="text"
					{...(register('zipcode'), { required: true })}
				/>
			</label>
			<br />
			<label htmlFor="">
				<span>Phone</span>
				<input
					autoComplete="tel"
					id=""
					placeholder="Your phone number"
					type="number"
					{...(register('phone'), { required: true })}
				/>
			</label>
			<div>
				<button
					type="button"
					onClick={handleClearClick}
				>
					Clear
				</button>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default SignUpForm;
