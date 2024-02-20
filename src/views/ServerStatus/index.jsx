import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

import Events from '../../components/events';
import useEventsResultsServer from "../../state/event-result-server";
import ServerStatus from "../../components/events/Servers/ServerStatus"
import styles from "./ServerS.module.css";

const Server = () => {
    const { data, isLoading, error, fetchEvents } = useEventsResultsServer();
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
                    <div className={styles.TabsContainer}></div>
                    
                    <Outlet />

                    <Events searchTerm={searchTerm} events={events} />
                    <ServerStatus />
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

export default Server;