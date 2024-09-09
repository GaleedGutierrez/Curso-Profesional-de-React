import { FC } from 'react';

import styles from './styles.module.css';

interface Props {
	info: string | undefined;
	name: string;
	image: string;
	// eslint-disable-next-line react/no-unused-prop-types
	id: string;
	handleEventClick: () => void;
}

const EventItem: FC<Props> = ({ info, name, image, handleEventClick }) => (
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
		</div>
	</div>
);

export default EventItem;
