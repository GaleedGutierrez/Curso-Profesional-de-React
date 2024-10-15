import Error404 from '@src/views/Error404/indes';
import Profile from '@src/views/Profile';
import Details from '@views/Detail';
import Home from '@views/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const ROUTER = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <Error404 />,
	},
	{
		path: '/detail/:eventId',
		element: <Details />,
	},
	{
		path: '/profile',
		element: <Profile />,
		children: [
			{ path: 'my-info', element: <div>My Info</div> },
			{
				path: 'liked-events',
				element: <div>Liked Events</div>,
			},
		],
	},
]);
const MyRoutes = (): JSX.Element => <RouterProvider router={ROUTER} />;

export default MyRoutes;
