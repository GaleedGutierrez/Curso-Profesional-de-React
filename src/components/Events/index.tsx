import data from '@data/events.json';
import { FC } from 'react';

import EventItem from './components/EventItem';

interface Props {
	searchTerm: string;
}

// const EVENTS = data._embedded.events;
const {
	_embedded: { events },
} = data;

const Events: FC<Props> = ({ searchTerm }) => {
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

		return filteredEvents.map<JSX.Element>((eventItem) => (
			<EventItem
				name={eventItem.name}
				info={eventItem.info}
				image={eventItem.images[0].url}
				key={`event-item-${eventItem.id}`}
				onEventClick={() => handleEventItemClick(eventItem.id)}
				id={eventItem.id}
			/>
		));
	}

	return <div>{renderEvents()}</div>;
};

export default Events;
