import { AppRoutes } from '@models/index';
import { BrowserRouter, Route } from 'react-router-dom';

import RoutesWithNotFound from '@/routes/NotFoundPage';
import { Details, Home, Profile } from '@/views/index';
import { LikedEvents, MyInfo } from '@/views/Profile/components';

const AppRouter = (): JSX.Element => (
	<BrowserRouter>
		<RoutesWithNotFound>
			<Route
				element={<Home />}
				path={AppRoutes.home}
			/>
			<Route
				element={<Details />}
				path={AppRoutes.detail}
			/>
			<Route
				element={<Profile />}
				path={AppRoutes.profile.root}
			>
				<Route
					element={<MyInfo />}
					path={AppRoutes.profile.myInfo}
				/>
				<Route
					element={<LikedEvents />}
					path={AppRoutes.profile.likedEvents}
				/>
			</Route>
		</RoutesWithNotFound>
	</BrowserRouter>
);

export default AppRouter;
