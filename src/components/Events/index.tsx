import useEventData from '@src/hooks/useEventsData';
import { FC } from 'react';

import EventItem from './components/EventItem';

interface Props {
	searchTerm: string;
}

const Events: FC<Props> = ({ searchTerm }) => {
	const { events, isLoading, error } = useEventData();

	function handleEventItemClick(id: string): void {
		// eslint-disable-next-line no-console
		console.log(`Event with id ${id} clicked`);
	}

	function renderEvents(): JSX.Element[] {
		let filteredEvents = events;

		if (searchTerm) {
			const SEARCH_TERM = searchTerm.toLowerCase();

			filteredEvents = events.filter((eventItem) =>
				eventItem.name.toLowerCase().includes(SEARCH_TERM),
			);
		}

		return filteredEvents.map((eventItem) => (
			<EventItem
				key={`event-item-${eventItem.id}`}
				id={eventItem.id}
				image={eventItem.images[0].url}
				info={eventItem.info}
				name={eventItem.name}
				onEventClick={() => handleEventItemClick(eventItem.id)}
			/>
		));
	}

	if (error) {
		return <div>There has been an error.</div>;
	}

	if (isLoading) {
		return <div>Loading results...</div>;
	}

	return <div>{renderEvents()}</div>;
};

export default Events;
