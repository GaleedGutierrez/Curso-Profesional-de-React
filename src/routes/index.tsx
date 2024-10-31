import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Details, Error404, Home, Profile } from '@/views';

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
