import { useEffect, useRef, useState } from 'react';

type RestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface Parameters<T> {
	data?: T;
	isLoading: boolean;
	error?: Error;
}

function useFetch<T>(
	url: string,
	restMethod: RestMethod = 'GET',
): Parameters<T> {
	const [data, setData] = useState<T>();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error>();
	const DID_FETCH_REF = useRef(false);

	useEffect(() => {
		const CONTROLLER = new AbortController();

		if (DID_FETCH_REF.current) {
			return;
		}

		async function fetchData(): Promise<void> {
			try {
				const RESPONSE = await fetch(url, {
					method: restMethod,
					signal: CONTROLLER.signal,
				});

				if (!RESPONSE.ok) {
					throw new Error('Error fetching data');
				}

				const JSON_DATA = (await RESPONSE.json()) as T;

				setData(JSON_DATA);
				DID_FETCH_REF.current = true;
			} catch (error) {
				if (error instanceof Error) {
					setError(error);
				}
			} finally {
				setIsLoading(false);
			}
		}

		void fetchData();

		return (): void => {
			if (DID_FETCH_REF.current) {
				CONTROLLER.abort();
			}
		};
	}, [url, restMethod]);

	return { data, isLoading, error };
}

export default useFetch;
