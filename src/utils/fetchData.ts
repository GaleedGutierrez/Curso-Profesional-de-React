async function fetchData<T>(url: string): Promise<T | undefined> {
	const CONTROLLER = new AbortController();

	try {
		const RESPONSE = await fetch(url, {
			signal: CONTROLLER.signal,
		});

		if (!RESPONSE.ok) {
			throw new Error('Error fetching data');
		}

		return (await RESPONSE.json()) as T;
	} catch (error) {
		if (error instanceof Error) {
			throw new TypeError(error.message);
		}
	}
}

export default fetchData;
