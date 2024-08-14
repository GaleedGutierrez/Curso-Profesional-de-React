import { FC, useState } from 'react';

interface Props {
	onSearch: (searchedTerm: string) => void;
}

const NavBar: FC<Props> = ({ onSearch }) => {
	const [search, setSearch] = useState('');

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
				type="text"
				placeholder="Busca tu evento favorito"
				onChange={handleInputChange}
				value={search}
				onKeyUp={handleInputKeyUp}
			/>
		</nav>
	);
};

export default NavBar;
