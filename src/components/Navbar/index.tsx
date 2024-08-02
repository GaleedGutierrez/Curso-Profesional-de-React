import { useState } from 'react';

function NavBar(): JSX.Element {
	const [search, setSearch] = useState('');

	function handleInputChange(
		event: React.ChangeEvent<HTMLInputElement>,
	): void {
		setSearch(event.target.value);
	}

	return (
		<div>
			<p>Boletera</p>
			<input
				type="text"
				placeholder="Busca tu evento favorito"
				onChange={handleInputChange}
				value={search}
			/>
		</div>
	);
}

export default NavBar;
