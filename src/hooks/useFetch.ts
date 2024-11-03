import { useEffect, useRef, useState } from 'react';

type RestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface Parameters<T> {
	data?: T;
	isLoading: boolean;
	error?: Error;
	fetchData: (url: string) => Promise<void>;
}

interface FetchProperties {
	restMethod?: RestMethod;
	controller?: AbortController;
}

const useFetch = <T>(
	url: string,
	{ restMethod = 'GET', controller }: FetchProperties = {},
): Parameters<T> => {
	const [data, setData] = useState<T>();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error>();
	const DID_FETCH_REF = useRef(false);
	const CONTROLLER = controller ?? new AbortController();

	const fetchData = async (url: string): Promise<void> => {
		setError(undefined);
		setIsLoading(true);

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
	};

	useEffect(() => {
		if (DID_FETCH_REF.current) {
			return;
		}

		void fetchData(url);

		return (): void => {
			if (DID_FETCH_REF.current) {
				CONTROLLER.abort();
			}
		};
	}, [url, restMethod]);

	return { data, isLoading, error, fetchData };
};

export default useFetch;
