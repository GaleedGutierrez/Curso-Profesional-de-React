import { useFetch } from '@src/hooks';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Events as EventsType } from '../../models/index';
import EventItem from './components/EventItem';

interface Properties {
	searchTerm: string;
}

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
const API_KEY = process.env.REACT_APP_API_KEY_TICKERMASTER;
const COUNTRY_CODE = 'MX';
const URL = `${BASE_URL}?apikey=${API_KEY}&countryCode=${COUNTRY_CODE}`;

const Events: FC<Properties> = ({ searchTerm }) => {
	const navigate = useNavigate();
	const { data, isLoading, error } = useFetch<EventsType>(URL);
	// eslint-disable-next-line no-underscore-dangle
	const EVENTS = data?._embedded.events ?? [];

	// const EVENTS
	function renderEvents(): JSX.Element[] {
		let filteredEvents = EVENTS;

		if (searchTerm) {
			const SEARCH_TERM = searchTerm.toLowerCase();

			filteredEvents = EVENTS.filter((eventItem) =>
				eventItem.name.toLowerCase().includes(SEARCH_TERM),
			);
		}

		return filteredEvents.map((eventItem) => {
			function onEventItemClick(): void {
				navigate(`/detail/${eventItem.id}`);
			}

			return (
				<EventItem
					key={`event-item-${eventItem.id}`}
					handleEventClick={onEventItemClick}
					// id={eventItem.id}
					image={eventItem.images[0].url}
					info={eventItem.info}
					name={eventItem.name}
				/>
			);
		});
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
