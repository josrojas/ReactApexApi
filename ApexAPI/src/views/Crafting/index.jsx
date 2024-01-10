import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

import Events from '../../components/events';
import useEventsResultsCraft from "../../state/event-result-craft";
import CraftingRotation from "../../components/events/Crafting/CraftingRotation";
import styles from './CraftingRotation.module.css';

const Crafting = () => {
    const { data, isLoading, error, fetchEvents } = useEventsResultsCraft();
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
                    <Link to="/" className={styles.homeLink}>Home</Link>
                    <div className={styles.TabsContainer}>

                        <Link to="/server-status" className={styles.homeLink}>Server status</Link>
                        <div className={styles.TabsContainer}></div>
                    </div>
                    <Outlet />

                    <Events searchTerm={searchTerm} events={events} />
                    <CraftingRotation />
                </>
            </div>
        );
    };

    //Loading or show events or error
    return (
        <>
            {renderEvents()}
        </>
    )
};

export default Crafting;