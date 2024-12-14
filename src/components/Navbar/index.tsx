import { forwardRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

interface Properties {
	onSearch: (searchedTerm: string) => void;
	isEnabled: boolean;
}

const NavBar = forwardRef<HTMLElement, Properties>(
	({ onSearch, isEnabled }, reference) => {
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

		if (reference && typeof reference !== 'function') {
			// console.log(reference.current);
		}

		return (
			<nav
				ref={reference}
				className={styles['navbar-container']}
			>
				{isEnabled ? <p>Boletera</p> : ''}
				<input
					className={styles['navbar__search']}
					placeholder="Busca tu evento favorito"
					type="search"
					value={search}
					onChange={handleInputChange}
					onKeyUp={handleInputKeyUp}
				/>
				<Link to="/profile/my-info">Mi perfil</Link>
			</nav>
		);
	},
);

NavBar.displayName = 'NavBar';

export default NavBar;
