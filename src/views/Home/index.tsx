import Events from '@components/Events';
import Navbar from '@components/Navbar';
import { useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { useFetch } from '@/hooks';
import { Events as EventsType } from '@/models';
import { normalizeText } from '@/utils';

import styles from './styles.module.css';

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
const API_KEY = process.env.REACT_APP_API_KEY_TICKERMASTER;
const COUNTRY_CODE = 'MX';
const URL = `${BASE_URL}?apikey=${API_KEY}&countryCode=${COUNTRY_CODE}`;

const Home = (): JSX.Element => {
	const { data, isLoading, error, fetchData } = useFetch<EventsType>(URL);
	const [searchTerm, setSearchTerm] = useState('');
	const CONTAINER_REF = useRef(null);

	const handleNavbarSearch = (searchedTerm: string): void => {
		setSearchTerm(normalizeText(searchedTerm));

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		fetchData(`${URL}&keyword=${searchedTerm}`);
	};

	const handlePageClick = ({ selected }: { selected: number }): void => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		fetchData(`${URL}&keyword=${searchTerm}&page=${selected}`);
	};

	return (
		<>
			<Navbar
				ref={CONTAINER_REF}
				isEnabled
				onSearch={handleNavbarSearch}
			/>
			<Events
				data={data}
				error={error}
				isLoading={isLoading}
				searchTerm={searchTerm}
			/>
			<ReactPaginate
				activeClassName={styles['pagination-container__page--active']}
				breakLabel="..."
				className={styles['pagination-container']}
				nextClassName=""
				nextLabel=">"
				nextLinkClassName={styles['pagination-container__next']}
				pageClassName={styles['pagination-container__page']}
				pageCount={data?.page.totalPages ?? 0}
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
