import './App.css';

import Events from '@components/Events';
import Navbar from '@components/Navbar';
import { useState } from 'react';

import { normalizeText } from './utils/normalizeText';

function App(): JSX.Element                       {
	const [searchTerm, setSearchTerm] = useState('');

	function handleNavbarSearch(searchedTerm: string): void {
		setSearchTerm(normalizeText(searchedTerm));
	}

	return (
		<>
			<Navbar onSearch={handleNavbarSearch} />
			<Events searchTerm={searchTerm} />
		</>
	);
}

export default App;
