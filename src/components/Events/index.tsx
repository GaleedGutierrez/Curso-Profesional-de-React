import useEventData from '@src/hooks/useEventsData';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import EventItem from './components/EventItem';

interface Properties {
	searchTerm: string;
}

const Events: FC<Properties> = ({ searchTerm }) => {
	const { events, isLoading, error } = useEventData();
	const navigate = useNavigate();

	function handleEventItemClick(id: string): void {
		navigate(`/detail/${id}`);
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
				handleEventClick={() => handleEventItemClick(eventItem.id)}
				id={eventItem.id}
				image={eventItem.images[0].url}
				info={eventItem.info}
				name={eventItem.name}
			/>
		));
	}

	if (error) {
		return <div>There has been an error.</div>;
	}

	if (isLoading) {
		return (
			<div>
				Loading results...
				<div>{renderEvents()}</div>
			</div>
		);
	}

	return <div>{renderEvents()}</div>;
};

export default Events;
