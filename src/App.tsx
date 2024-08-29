import './App.css';

// import { useState } from 'react';
import SignUpForm from './components/SignUpForm';
// import { normalizeText } from './utils/normalizeText';

function App(): JSX.Element {
	// const [searchTerm, setSearchTerm] = useState('');

	// function handleNavbarSearch(searchedTerm: string): void {
	// 	setSearchTerm(normalizeText(searchedTerm));
	// }

	return (
		<>
			{/* <Navbar onSearch={handleNavbarSearch} />
			<Events searchTerm={searchTerm} /> */}
			<SignUpForm dummy="" />
		</>
	);
}

export default App;
