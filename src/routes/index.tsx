import Details from '@views/Detail';
import Home from '@views/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const ROUTER = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/detail/',
		element: <Details />,
	},
]);
const MyRoutes = (): JSX.Element => <RouterProvider router={ROUTER} />;

export default MyRoutes;
