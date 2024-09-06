import './App.css';

import { useRef, useState } from 'react';

import Events from './components/Events';
import Navbar from './components/Navbar';
import { normalizeText } from './utils/normalizeText';

// import { useState } from 'react';
// import { normalizeText } from './utils/normalizeText';
function App(): JSX.Element {
	const [searchTerm, setSearchTerm] = useState('');
	const CONTAINER_REF = useRef(null);

	function handleNavbarSearch(searchedTerm: string): void {
		CONTAINER_REF.current;

		setSearchTerm(normalizeText(searchedTerm));
	}

	return (
		<>
			<Navbar
				ref={CONTAINER_REF}
				onSearch={handleNavbarSearch}
			/>
			<Events searchTerm={searchTerm} />
			{/* <SignUpForm dummy="" /> */}
		</>
	);
}

export default App;
