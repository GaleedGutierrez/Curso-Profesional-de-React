import { FC } from 'react';

import styles from './styles.module.css';

interface Properties {
	info: string | undefined;
	name: string;
	image: string;
	// id: string;
	handleEventClick: () => void;
}

const EventItem: FC<Properties> = ({
	info,
	name,
	image,
	// id,
	handleEventClick,
}) => (
	<div className={styles['event-item-container']}>
		<img
			alt=""
			src={image}
		/>
		<div className={styles['event-info-container']}>
			<h4 className={styles['event-info__title']}>{name}</h4>
			<p className={styles['event-info__text']}>
				{info ?? "There isn't info"}
			</p>
			<button
				className={styles['event-info__see-more-button']}
				type="button"
				onClick={handleEventClick}
			>
				Ver más
			</button>
			{/* <Link
				className={`${styles['event-info__see-more-button']}`}
				to={`/detail/${id}`}
			>
				Ver más
			</Link> */}
		</div>
	</div>
);

export default EventItem;
