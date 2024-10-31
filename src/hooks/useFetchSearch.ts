// import { Events } from '@/models';

// import useFetch from './useFetch';

// interface EventsSearch {
// 	controller: AbortController;
// 	data: Events | undefined;
// }

// export function searchEvents(url: string): EventsSearch {
// 	const controller = new AbortController();
// 	const { data } = useFetch<Events>(url, { controller });

// 	return {
// 		controller,
// 		data,
// 	};
// }

// let ctr: AbortController;
// let timeout: NodeJS.Timeout;

// input.addEventListener('input', (event) => {
// 	if (timeout) {
// 		clearTimeout(timeout);
// 	}

// 	timeout = setTimeout(() => {
// 		if (ctr) {
// 			ctr.abort();
// 		}

// 		const { query, controller } = searchBooks();

// 		ctr = controller;

// 		console.log(event.target.value);
// 		query(event.target.value)
// 			.then((response) => {
// 				books.innerHTML = '';

// 				for (const book of response.results) {
// 					books.innerHTML += `<li>${book.title}</li>`;
// 				}
// 			})
// 			.catch(() => {
// 				console.log('fetch cancelado');
// 			});
// 	}, 500);
// });
console.info('useFetchSearch.ts');
