import { InputForm } from '@components/index';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserData, userDataSchema } from '@models/index';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './styles.module.css';

const USER_DATA = 'userData';

const handleFormSubmit: SubmitHandler<UserData> = (data): void => {
	try {
		localStorage.setItem(USER_DATA, JSON.stringify(data));
		alert('Updated successfully');
	} catch {
		alert('There was an error saving your data');
	}
};

const MyInfo = (): JSX.Element => {
	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<UserData>({
		resolver: zodResolver(userDataSchema),
		mode: 'onBlur',
		defaultValues: {
			name: '',
			email: '',
			age: 0,
		},
	});

	useEffect(() => {
		try {
			const USER_DATA = JSON.parse(
				localStorage.getItem('userData') ?? 'null',
			) as UserData | null;

			if (!USER_DATA) {
				return;
			}

			setValue('name', USER_DATA.name);
			setValue('email', USER_DATA.email);
			setValue('age', USER_DATA.age);
		} catch {
			alert('There was an error loading your data');
		}
	}, [setValue]);

	return (
		<form
			className={styles['my-info-form']}
			onSubmit={handleSubmit(handleFormSubmit)}
		>
			<InputForm
				control={control}
				error={errors.name}
				label="Name"
				name="name"
				type="text"
			/>
			<InputForm
				control={control}
				error={errors.email}
				label="Email"
				name="email"
				type="email"
			/>
			<InputForm
				control={control}
				error={errors.email}
				label="Age"
				name="age"
				type="number"
			/>
			<button type="submit">Save</button>
		</form>
	);
};

export default MyInfo;
