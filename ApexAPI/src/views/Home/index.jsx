import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

import Navbar from '../../components/Navbar';
import Events from '../../components/events';
import useEventResults from '../../state/event-results';
import MapRotation from '../../components/events/MapRotation';
import styles from './Home.module.css';

const Home = () => {
    const { data, isLoading, error, fetchEvents } = useEventResults();
    const events = useMemo(() => data?._embedded?.events || [], [data?._embedded?.events]);
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

        return (
            <div>
                <>
                    <MapRotation />
                </>
            </div>
        );
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