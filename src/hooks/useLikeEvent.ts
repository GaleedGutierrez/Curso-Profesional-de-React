import { LIKED_EVENTS_STORAGE_KEY } from '@utils/index';
import { useState } from 'react';

interface ReturnUseLikeEvent {
	isLiked: boolean;
	toggleLikeEvent: () => void;
}

function checkIsEventLiked(eventId: string): boolean {
	const LIKED_EVENTS = JSON.parse(
		localStorage.getItem(LIKED_EVENTS_STORAGE_KEY) ?? '[]',
	) as string[];

	return LIKED_EVENTS.includes(eventId);
}

const useLikeEvent = (eventId: string): ReturnUseLikeEvent => {
	const [isLiked, setIsLiked] = useState(checkIsEventLiked(eventId));

	function toggleLikeEvent(): void {
		const LIKED_EVENTS = JSON.parse(
			localStorage.getItem(LIKED_EVENTS_STORAGE_KEY) ?? '[]',
		) as string[];

		const EVENT_INDEX = LIKED_EVENTS.indexOf(eventId);

		if (EVENT_INDEX === -1) {
			LIKED_EVENTS.push(eventId);
			setIsLiked(true);
		} else {
			LIKED_EVENTS.splice(EVENT_INDEX, 1);
			setIsLiked(false);
		}

		localStorage.setItem(
			LIKED_EVENTS_STORAGE_KEY,
			JSON.stringify(LIKED_EVENTS),
		);
	}

	return {
		isLiked,
		toggleLikeEvent,
	};
};

export default useLikeEvent;
