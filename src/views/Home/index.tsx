import Events from '@components/Events';
import Navbar from '@components/Navbar';
import { normalizeText } from '@utils/normalizeText';
import { useRef, useState } from 'react';

const Home = (): JSX.Element => {
	const [searchTerm, setSearchTerm] = useState('');
	const CONTAINER_REF = useRef(null);

	function handleNavbarSearch(searchedTerm: string): void {
		// eslint-disable-next-line no-console
		console.log(CONTAINER_REF.current);
		setSearchTerm(normalizeText(searchedTerm));
	}

	return (
		<>
			<Navbar
				ref={CONTAINER_REF}
				isEnabled
				onSearch={handleNavbarSearch}
			/>
			<Events searchTerm={searchTerm} />
			{/* <SignUpForm dummy="" /> */}
		</>
	);
};

export default Home;
