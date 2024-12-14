import { Link, Outlet, useLocation } from 'react-router-dom';

import styles from './styles.module.css';

function Profile(): JSX.Element {
	const { pathname } = useLocation();
	const TABS = [
		{ path: 'my-info', label: 'Mi información' },
		{ path: 'liked-events', label: 'Eventos favoritos' },
	];

	return (
		<>
			<Link
				className={styles['home-link']}
				to="/"
			>
				Home
			</Link>
			<nav className={styles['tabs-container']}>
				{TABS.map((tab) => (
					<Link
						key={tab.path}
						to={`/profile/${tab.path}`}
						className={
							pathname.includes(tab.path)
								? `${styles['tab']} ${styles['tab--active']}`
								: styles['tab']
						}
					>
						{tab.label}
					</Link>
				))}
			</nav>
			<Outlet />
		</>
	);
}

export default Profile;
