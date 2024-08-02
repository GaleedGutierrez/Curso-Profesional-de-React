import './App.css';

import Events from '@components/Events';
import Navbar from '@components/Navbar';

function App(): JSX.Element {
	return (
		<>
			<Navbar />
			<Events test={true} />
		</>
	);
}

export default App;
