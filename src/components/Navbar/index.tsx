import { forwardRef, useState } from 'react';

interface Props {
	onSearch: (searchedTerm: string) => void;
}

const NavBar = forwardRef<HTMLElement, Props>(({ onSearch }, ref) => {
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

	if (ref && typeof ref !== 'function') {
		// eslint-disable-next-line no-console
		console.log(ref.current);
	}

	return (
		<nav ref={ref}>
			<p>Boletera</p>
			<input
				placeholder="Busca tu evento favorito"
				type="text"
				value={search}
				onChange={handleInputChange}
				onKeyUp={handleInputKeyUp}
			/>
			<input
				checked
				readOnly
				type="checkbox"
			/>
		</nav>
	);
});

NavBar.displayName = 'NavBar';

export default NavBar;
