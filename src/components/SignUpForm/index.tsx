import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
	dummy: string;
}

interface FormData {
	name: string;
	age: string;
	address: string;
	zipcode: string;
	phone: string;
}

const SignUpForm: FC<Props> = () => {
	const { register, handleSubmit, reset } = useForm<FormData>();

	function handleClearClick(): void {
		reset();
	}

	const handleSubmitForm: SubmitHandler<FormData> = (data) =>
		// eslint-disable-next-line no-console
		console.log(data);

	return (
		<form onSubmit={(event) => void handleSubmit(handleSubmitForm)(event)}>
			<label htmlFor="">
				<span>Name</span>
				<input
					type="text"
					id=""
					placeholder="Your name"
					autoComplete="name"
					{...(register('name'), { required: true })}
				/>
			</label>
			<br />
			<label htmlFor="">
				<span>Age</span>
				<input
					type="number"
					id=""
					placeholder="Your age"
					{...(register('age'), { required: true })}
				/>
			</label>
			<br />
			<label htmlFor="">
				<span>Address</span>
				<input
					type="text"
					id=""
					placeholder="Your address"
					autoComplete="street-address"
					{...(register('address'), { required: true })}
				/>
			</label>
			<br />
			<label htmlFor="">
				<span>Zip code</span>
				<input
					type="text"
					id=""
					placeholder="Your Zip code"
					autoComplete="postal-code"
					{...(register('zipcode'), { required: true })}
				/>
			</label>
			<br />
			<label htmlFor="">
				<span>Phone</span>
				<input
					type="number"
					id=""
					placeholder="Your phone number"
					autoComplete="tel"
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
