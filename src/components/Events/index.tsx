import { Events as EventsType } from '@models/index';
import { useFetchZustand } from '@state/index';
import { memo } from 'react';

import EventItem from './components/EventItem';

const Events = (): JSX.Element => {
	const { data, isLoading, error } = useFetchZustand();
	const DATA = data as EventsType | undefined;
	// eslint-disable-next-line no-underscore-dangle
	const EVENTS = DATA?._embedded?.events ?? [];

	function renderEvents(): JSX.Element[] {
		return EVENTS.map((eventItem) => (
			<EventItem
				key={`event-item-${eventItem.id}`}
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

	return <main>{renderEvents()}</main>;
};

export default memo(Events);
