import { FC, FormEvent, useState } from 'react';

interface Props {
	dummy: string;
}

const SignUpForm: FC<Props> = () => {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [address, setAddress] = useState('');
	const [zipcode, setZipcode] = useState('');
	const [phone, setPhone] = useState('');

	function handleClearClick(): void {
		setName('');
		setAge('');
		setAddress('');
		setZipcode('');
		setPhone('');
	}

	function handleSubmitForm(event: FormEvent<HTMLFormElement>): void {
		event.preventDefault();
		// eslint-disable-next-line no-console
		console.log('Submitting form: ', {
			name,
			age,
			address,
			zipcode,
			phone,
		});
	}

	return (
		<form onSubmit={handleSubmitForm}>
			<label htmlFor="">
				<span>Name</span>
				<input
					type="text"
					name=""
					id=""
					placeholder="Your name"
					autoComplete="name"
					value={name}
					onChange={(event) => setName(event.target.value)}
					required
				/>
			</label>
			<br />
			<label htmlFor="">
				<span>Age</span>
				<input
					type="number"
					name=""
					id=""
					placeholder="Your age"
					value={age}
					onChange={(event) => setAge(event.target.value)}
					required
				/>
			</label>
			<br />
			<label htmlFor="">
				<span>Address</span>
				<input
					type="text"
					name=""
					id=""
					placeholder="Your address"
					autoComplete="street-address"
					value={address}
					onChange={(event) => setAddress(event.target.value)}
					required
				/>
			</label>
			<br />
			<label htmlFor="">
				<span>Zip code</span>
				<input
					type="text"
					name=""
					id=""
					placeholder="Your Zip code"
					autoComplete="postal-code"
					value={zipcode}
					onChange={(event) => setZipcode(event.target.value)}
					required
				/>
			</label>
			<br />
			<label htmlFor="">
				<span>Phone</span>
				<input
					type="number"
					name=""
					id=""
					placeholder="Your phone number"
					autoComplete="tel"
					value={phone}
					onChange={(event) => setPhone(event.target.value)}
					required
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
