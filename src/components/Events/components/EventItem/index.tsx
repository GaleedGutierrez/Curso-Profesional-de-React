import { Heart, HeartFilled } from '@icons/index';
import { Image } from '@models/index';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import useLikeEvent from '@/hooks/useLikeEvent';

import styles from './styles.module.css';

interface Properties {
	info: string | undefined;
	name: string;
	images: Image[];
	id: string;
	// handleEventClick: () => void;
}

const EventItem = ({
	info,
	name,
	images,
	id,
	// handleEventClick,
}: Properties): JSX.Element => {
	const { isLiked, toggleLikeEvent: handleToggleLikeEvent } =
		useLikeEvent(id);
	const IMAGE_REF = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (IMAGE_REF.current) {
			IMAGE_REF.current.style.aspectRatio =
				images[0].ratio?.replace('_', '/') ?? '';
		}
	});

	return (
		<div className={styles['event-item-container']}>
			<div className={styles['event-item__image-container']}>
				<img
					ref={IMAGE_REF}
					alt={name}
					src={images[0].url}
				/>
				<button
					className={styles['event-item__favorite-button']}
					onClick={handleToggleLikeEvent}
				>
					{isLiked ? (
						<Heart title="Mark as favorite" />
					) : (
						<HeartFilled title="Unmark as favorite" />
					)}
				</button>
			</div>
			<div className={styles['event-info-container']}>
				<h4 className={styles['event-info__title']}>{name}</h4>
				<p className={styles['event-info__text']}>
					{info ?? "There isn't info"}
				</p>
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
