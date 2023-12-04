import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import ReactPaginate from 'react-paginate';

import Navbar from '../../components/Navbar';
import Events from '../../components/Events';
import useEventResults from '../../state/event-results';
import styles from './Home.module.css';

const Home = () => {
    const { data, isLoading, error, fetchEvents } = useEventResults();
    const page = useMemo(() => data?.page || {}, [data?.page]);

    const [searchTerm, setSearchTerm] = useState('')
    const containerRef = useRef();
    const fetchMyEventsRef = useRef();

    fetchMyEventsRef.current = fetchEvents;

    useEffect(() => {
        fetchMyEventsRef.current();
    }, []);

    const handleNavbarSearch = (term) => {
        setSearchTerm(term);
        fetchEvents(`&keyword = ${term}`);
    };

    const handlePageClick = useCallback(({ selected }) => {
        fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
    }, [searchTerm, fetchEvents]);

    const renderEvents = () => {
        if (isLoading) {
            return <div>Cargando...</div>;
        }

        if (error) {
            return <div>Ha ocurrido un error</div>;
        }

        <div>
            <Events searchTerm={searchTerm} events={events} />
            <ReactPaginate
                className={styles.pagination}
                nextClassName={styles.next}
                previousClassName={styles.previous}
                pageClassName={styles.page}
                activeClassName={styles.activePage}
                disabledClassName={styles.disabledPage}
                breakLabel={'...'}
                nextLabel={'>'}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={page.totalPages}
                previousLabel={'<'}
                renderOnZeroPageCount={null}
            />
        </div>
    };

    //Loading or show events or error
    return (
        <>
            <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
            {renderEvents()}
        </>
    )
};

export default Home;