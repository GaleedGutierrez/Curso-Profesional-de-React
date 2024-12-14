import { create } from 'zustand';

interface FetchProperties extends RequestInit {
	controller?: AbortController;
}

interface Store<T> {
	data?: T;
	isLoading: boolean;
	error?: Error;
	fetchData: (url: string, options?: FetchProperties) => Promise<void>;
}

const useFetchZustand = create<Store<unknown>>((set) => ({
	data: undefined,
	isLoading: false,
	error: undefined,
	fetchData: async (
		url: string,
		{ controller }: FetchProperties = {},
	): Promise<void> => {
		set({ error: undefined, isLoading: true });

		const CONTROLLER = controller ?? new AbortController();

		try {
			const RESPONSE = await fetch(url, {
				signal: CONTROLLER.signal,
			});

			if (!RESPONSE.ok) {
				throw new Error('Error fetching data');
			}

			const data = (await RESPONSE.json()) as unknown;

			set({ data });
		} catch (error) {
			if (error instanceof Error) {
				set({ error });
			}
		} finally {
			set({ isLoading: false });
		}
	},
}));

export default useFetchZustand;
