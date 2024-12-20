import { format } from '@formkit/tempo';
import { Suspense } from 'react';

import ErrorBoundary from '@/ErrorBoundary';
import { Event } from '@/models';
import fetchDataWrapPromise from '@/utils/fetchDataWrapPromise';

const PATHNAME = globalThis.location.pathname;
const EVENT_ID = PATHNAME.slice(8);
const API_KEY = import.meta.env.VITE_API_KEY_TICKERMASTER;
const URL = `https://app.ticketmaster.com/discovery/v2/events/${EVENT_ID}.json?apikey=${API_KEY}`;
const RESOURCE = fetchDataWrapPromise<Event>(URL);

const DetailsComponent = (): JSX.Element => {
	const data = RESOURCE.read();

	if (!data) {
		return <h1>Loading event...</h1>;
	}

	return (
		<main>
			<section>
				<img
					alt={data.name}
					src={data.images[0].url}
				/>
				<h4>{data.name}</h4>
				<p>{data.info}</p>
				<p>
					{format(new Date(data.dates.start.dateTime), {
						date: 'long',
						time: 'short',
					})}
				</p>
			</section>
			<section>
				<h5>Seat map</h5>
				<img
					alt="Seat map event"
					src={data.seatmap?.staticUrl}
				/>
				<p>{data.pleaseNote}</p>
				<p>
					Rango de precios: ${data.priceRanges[0].min} - $
					{data.priceRanges[0].max} {data.priceRanges[0].currency}
				</p>
			</section>
			<a href={data.url}>Comprar tickets</a>
		</main>
	);
};

const Details = (): JSX.Element => (
	<Suspense fallback={<h1>Loading event...</h1>}>
		<ErrorBoundary fallback={<h1>No se pudo cargar el evento</h1>}>
			<DetailsComponent />
		</ErrorBoundary>
	</Suspense>
);

export default Details;
