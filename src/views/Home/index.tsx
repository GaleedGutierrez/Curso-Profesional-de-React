import Events from '@components/Events';
import Navbar from '@components/Navbar';
import { Events as EventsType } from '@models/index';
import { useFetchZustand } from '@state/index';
import { normalizeText } from '@utils/index';
import { useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { Dialog } from '@/components';

import styles from './styles.module.css';

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
const API_KEY = import.meta.env.VITE_API_KEY_TICKERMASTER as string;
const COUNTRY_CODE = 'MX';
const URL = `${BASE_URL}?apikey=${API_KEY}&countryCode=${COUNTRY_CODE}`;

const Home = (): JSX.Element => {
	const { data, fetchData } = useFetchZustand();
	const [searchTerm, setSearchTerm] = useState('');
	const CONTAINER_REF = useRef(null);
	const DATA = data as EventsType | undefined;
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	const PAGE = DATA?.page?.totalPages ?? 0;
	const REF_MODAL = useRef<HTMLDialogElement>(null);
	const handleNavbarSearch = (searchedTerm: string): void => {
		setSearchTerm(normalizeText(searchedTerm));

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		fetchData(`${URL}&keyword=${searchedTerm}`);
	};

	const handlePageClick = ({ selected }: { selected: number }): void => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		fetchData(`${URL}&keyword=${searchTerm}&page=${selected}`);
	};

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		fetchData(URL);
	}, [fetchData]);

	return (
		<>
			<Dialog ref={REF_MODAL}>
				<h1>Holaaaaaaa</h1>
			</Dialog>
			<button
				onClick={() => {
					REF_MODAL.current?.showModal();
				}}
			>
				Abrir
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
