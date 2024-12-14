import { useFetchList } from '@hooks/index';
import { Event } from '@models/index';
import { useEffect, useState } from 'react';

import { EventItem } from '@/components';
import { LIKED_EVENTS_STORAGE_KEY } from '@/utils';

const URL_BASE = 'https://app.ticketmaster.com/discovery/v2/events';
const API_KEY = import.meta.env.VITE_API_KEY_TICKERMASTER as string;
const LikedEvents = (): JSX.Element => {
	const [urlList, setUrlList] = useState<string[]>([]);
	const { data, error, isLoading, fetchData } = useFetchList<Event>(urlList);

	useEffect(() => {
		const LIKED_EVENTS = JSON.parse(
			localStorage.getItem(LIKED_EVENTS_STORAGE_KEY) ?? 'null',
		) as string[] | null;

		if (!LIKED_EVENTS) {
			setUrlList([]);

			return;
		}

		const LINKS = LIKED_EVENTS.map(
			(eventId) => `${URL_BASE}/${eventId}.json?apikey=${API_KEY}`,
		);

		setUrlList(LINKS);
	}, []);

	useEffect(() => {
		void fetchData(urlList);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [urlList]);

	if (error) {
		return <p>There has been an error.</p>;
	}

	if (isLoading) {
		return <p>Loading events...</p>;
	}

	if (!data || data.length === 0 || urlList.length === 0) {
		return <div>No tenes eventos en favoritos aún.</div>;
	}

	return (
		<main>
			{data.map((event) => (
				<EventItem
					key={event.id}
					id={event.id}
					images={event.images}
					info={event.info}
					name={event.name}
				/>
			))}
		</main>
	);
};

export default LikedEvents;
