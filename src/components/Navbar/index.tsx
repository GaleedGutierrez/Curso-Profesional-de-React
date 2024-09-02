import { FC, useEffect, useState } from 'react';

interface Props {
	onSearch: (searchedTerm: string) => void;
}

const NavBar: FC<Props> = ({ onSearch }) => {
	const [search, setSearch] = useState('');

	useEffect(() => {
		// eslint-disable-next-line no-console
		console.log('search: ');
	}, [search]);

	useEffect(() => {
		// eslint-disable-next-line no-console
		console.log('onSearch: ');
	}, [onSearch]);

	useEffect(() => {
		// eslint-disable-next-line no-console
		console.log('Componente listo.');
	});

	function handleInputChange(
		event: React.ChangeEvent<HTMLInputElement>,
	): void {
		setSearch(event.target.value);
	}

	function handleInputKeyUp(
		event: React.KeyboardEvent<HTMLInputElement>,
	): void {
		const KEY = event.key;

		if (KEY !== 'Enter') {
			return;
		}

		onSearch(search);
	}

	return (
		<nav>
			<p>Boletera</p>
			<input
				placeholder="Busca tu evento favorito"
				type="text"
				value={search}
				onChange={handleInputChange}
				onKeyUp={handleInputKeyUp}
			/>
		</nav>
	);
};

export default NavBar;
