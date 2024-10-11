import { forwardRef, useState } from 'react';

interface Properties {
	onSearch: (searchedTerm: string) => void;
	isEnabled: boolean;
}

const NavBar = forwardRef<HTMLElement, Properties>(
	({ onSearch, isEnabled }, reference) => {
		const [search, setSearch] = useState('');

		// console.log({ isEnabled });

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

		if (reference && typeof reference !== 'function') {
			// eslint-disable-next-line no-console
			console.log(reference.current);
		}

		return (
			<nav
				ref={reference}
				style={{
					marginBlockEnd: '1rem',
					width: '100%',
					display: 'flex',
				}}
			>
				{isEnabled ? (
					<p style={{ flex: 1, display: 'flex' }}>Boletera</p>
				) : (
					''
				)}
				<input
					placeholder="Busca tu evento favorito"
					type="text"
					value={search}
					style={{
						flex: 1,
						display: 'flex',
						justifyContent: 'center',
						padding: '4px 8px',
						borderRadius: '4px',
						border: 'none',
						width: '200px',
					}}
					onChange={handleInputChange}
					onKeyUp={handleInputKeyUp}
				/>
			</nav>
		);
	},
);

NavBar.displayName = 'NavBar';

export default NavBar;
