import { format } from '@formkit/tempo';
import { useParams } from 'react-router-dom';

import { useFetch } from '@/hooks';
import { Event } from '@/models';

const Details = (): JSX.Element => {
	const { eventId } = useParams();
	const API_KEY = import.meta.env.VITE_API_KEY_TICKERMASTER;
	const URL = `https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?apikey=${API_KEY}`;
	const { data, error, isLoading } = useFetch<Event>(URL);

	if (error) {
		return <main>There has been an error.</main>;
	}

	if (isLoading || !data) {
		return <main>Loading event...</main>;
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

export default Details;
