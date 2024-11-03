import { Events as EventsType } from '@models/index';
import { FC } from 'react';

import EventItem from './components/EventItem';

interface Properties {
	searchTerm: string;
	data: EventsType | undefined;
	isLoading: boolean;
	error: Error | undefined;
}

const Events: FC<Properties> = ({ searchTerm, data, isLoading, error }) => {
	console.info(searchTerm);

	// eslint-disable-next-line no-underscore-dangle
	const EVENTS = data?._embedded?.events ?? [];

	function renderEvents(): JSX.Element[] {
		// let filteredEvents = EVENTS;

		// if (searchTerm) {
		// 	const SEARCH_TERM = searchTerm.toLowerCase();

		// 	filteredEvents = EVENTS.filter((eventItem) =>
		// 		eventItem.name.toLowerCase().includes(SEARCH_TERM),
		// 	);
		// }

		return EVENTS.map((eventItem) => (
			// function onEventItemClick(): void {
			// 	navigate(`/detail/${eventItem.id}`);
			// }

			<EventItem
				key={`event-item-${eventItem.id}`}
				// handleEventClick={onEventItemClick}
				id={eventItem.id}
				images={eventItem.images}
				info={eventItem.info}
				name={eventItem.name}
			/>
		));
	}

	if (error) {
		return <p>There has been an error.</p>;
	}

	if (isLoading) {
		return <p>Loading events...</p>;
	}

	if (EVENTS.length === 0) {
		return <p>Try again with another search term.</p>;
	}

	return <div>{renderEvents()}</div>;
};

export default Events;
