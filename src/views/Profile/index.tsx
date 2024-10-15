import { Outlet } from 'react-router-dom';

function Profile(): JSX.Element {
	return (
		<>
			<div>Profile</div>
			<Outlet />
		</>
	);
}

export default Profile;
