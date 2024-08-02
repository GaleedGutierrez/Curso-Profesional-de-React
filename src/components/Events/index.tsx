import data from '@data/events.json';
import { FC } from 'react';

import EventItem from './components/EventItem';

interface Props {
	test: boolean;
}

// const EVENTS = data._embedded.events;
const {
	_embedded: { events },
} = data;

const Events: FC<Props> = () => {
	function handleEventItemClick(id: string): void {
		console.log(`Event with id ${id} clicked`);
	}

	const EVENTS_COMPONENTE = events.map<JSX.Element>((eventItem) => (
		<EventItem
			name={eventItem.name}
			info={eventItem.info}
			image={eventItem.images[0].url}
			key={`event-item-${eventItem.id}`}
			onEventClick={() => handleEventItemClick(eventItem.id)}
			id={eventItem.id}
		/>
	));

	return <div>{EVENTS_COMPONENTE}</div>;
};

export default Events;
