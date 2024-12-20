import Events from '@components/Events';
import Navbar from '@components/Navbar';
import { Events as EventsType } from '@models/index';
import { useFetchZustand } from '@state/index';
import { normalizeText } from '@utils/index';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './styles.module.css';

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
const API_KEY = import.meta.env.VITE_API_KEY_TICKERMASTER;
const COUNTRY_CODE = 'MX';
const URL = `${BASE_URL}?apikey=${API_KEY}&countryCode=${COUNTRY_CODE}`;

const Home = (): JSX.Element => {
	const { data, fetchData } = useFetchZustand();
	const [searchTerm, setSearchTerm] = useState('');
	const [isToggle, setIsToggle] = useState(false);
	const CONTAINER_REF = useRef(null);
	const DATA = useMemo(() => data as EventsType | undefined, [data]);
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	const PAGE = useMemo(() => DATA?.page?.totalPages ?? 0, [DATA]);
	const handleNavbarSearch = (searchedTerm: string): void => {
		setSearchTerm(normalizeText(searchedTerm));

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		fetchData(`${URL}&keyword=${searchedTerm}`);
	};

	const handlePageClick = useCallback(
		({ selected }: { selected: number }): void => {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			fetchData(`${URL}&keyword=${searchTerm}&page=${selected}`);
		},
		[fetchData, searchTerm],
	);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		fetchData(URL);
	}, [fetchData]);

	return (
		<>
			<button onClick={() => setIsToggle((previous) => !previous)}>
				{isToggle ? 'ON' : 'OFF'}
			</button>
			<Navbar
				ref={CONTAINER_REF}
				isEnabled
				onSearch={handleNavbarSearch}
			/>
			<Events
			// searchTerm={searchTerm}
			/>
			<ReactPaginate
				activeClassName={styles['pagination-container__page--active']}
				breakLabel="..."
				className={styles['pagination-container']}
				nextClassName=""
				nextLabel=">"
				nextLinkClassName={styles['pagination-container__next']}
				pageClassName={styles['pagination-container__page']}
				pageCount={PAGE}
				pageRangeDisplayed={5}
				previousClassName={styles['pagination-container__previous']}
				previousLabel="<"
				renderOnZeroPageCount={undefined}
				disabledClassName={
					styles['pagination-container__page--disabled']
				}
				onPageChange={handlePageClick}
			/>
		</>
	);
};

export default Home;
