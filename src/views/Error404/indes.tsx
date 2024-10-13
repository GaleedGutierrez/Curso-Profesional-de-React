import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

function Error404(): JSX.Element | undefined {
	const ERROR = useRouteError();

	if (!isRouteErrorResponse(ERROR)) {
		return;
	}

	console.error(ERROR);

	return (
		<div>
			<h1>{ERROR.status}</h1>
			<h2>{ERROR.statusText}</h2>
			<p>{ERROR.data}</p>
		</div>
	);
}

export default Error404;
