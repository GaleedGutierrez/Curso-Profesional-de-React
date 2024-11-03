import { FC, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { Image } from '@/models';

import styles from './styles.module.css';

interface Properties {
	info: string | undefined;
	name: string;
	images: Image[];
	id: string;
	// handleEventClick: () => void;
}

const EventItem: FC<Properties> = ({
	info,
	name,
	images,
	id,
	// handleEventClick,
}) => {
	const IMAGE_REF = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (IMAGE_REF.current) {
			IMAGE_REF.current.style.aspectRatio =
				images[0].ratio?.replace('_', '/') ?? '';
		}
	});

	return (
		<div className={styles['event-item-container']}>
			<img
				ref={IMAGE_REF}
				alt={name}
				src={images[0].url}
			/>
			<div className={styles['event-info-container']}>
				<h4 className={styles['event-info__title']}>{name}</h4>
				<p className={styles['event-info__text']}>
					{info ?? "There isn't info"}
				</p>
				{/* <button
					className={styles['event-info__see-more-button']}
					type="button"
					onClick={handleEventClick}
				>
					Ver más
				</button> */}
				<Link
					className={`${styles['event-info__see-more-button']}`}
					to={`/detail/${id}`}
				>
					Ver más
				</Link>
			</div>
		</div>
	);
};

export default EventItem;
