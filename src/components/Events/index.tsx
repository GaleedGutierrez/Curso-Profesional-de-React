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

const Events: FC<Props> = ({ test }) => {
	const EVENTS_COMPONENTE = events.map<JSX.Element>((eventItem) => (
		<EventItem
			name={eventItem.name}
			info={eventItem.info}
			image={eventItem.images[0].url}
			key={`event-item-${eventItem.id}`}
		/>
	));

	return (
		<div>
			{test}
			{EVENTS_COMPONENTE}
		</div>
	);
};

export default Events;
