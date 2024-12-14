import App from './App';
import ErrorBoundary from './ErrorBoundary';

const AppHookContainer = (): JSX.Element => (
	<ErrorBoundary>
		<App />
	</ErrorBoundary>
);

export default AppHookContainer;
