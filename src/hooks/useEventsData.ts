import eventsJSON from '@data/events.json';
import { useEffect, useState } from 'react';

type Events = typeof eventsJSON;

type Event = Events['_embedded']['events'][number];

interface useEventDataReturn {
	events: Event[];
	isLoading: boolean;
	error: Error | undefined;
}

function useEventData(): useEventDataReturn {
	const [data, setData] = useState<Events>();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error>();

	useEffect(() => {
		setTimeout(() => {
			try {
				setData(eventsJSON);
				setIsLoading(false);
			} catch (error) {
				if (error instanceof Error) {
					setError(error);
				}
			}

			// console.log(data.current);
		}, 2000);
	}, []);
	// eslint-disable-next-line no-console
	console.log(data);

	return {
		// eslint-disable-next-line no-underscore-dangle
		events: data?._embedded.events ?? [],
		isLoading,
		error,
	};
}

export default useEventData;
