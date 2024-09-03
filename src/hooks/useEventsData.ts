import eventsJSON from '@data/events.json';
import { useState } from 'react';

type Events = typeof eventsJSON;

type Event = Events['_embedded']['events'][number];

interface useEventDataReturn {
	events: Event[];
}

function useEventData(): useEventDataReturn {
	const [data] = useState<Events>(eventsJSON);
	const {
		_embedded: { events },
	} = data;

	return {
		events,
	};
}

export default useEventData;
