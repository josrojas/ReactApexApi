import { Link, Outlet } from "react-router-dom";
import { useRef, useEffect } from 'react';

import useEventResults from '../../state/event-results';
import MapRotation from '../../components/events/Maps/MapRotation';
import styles from './Home.module.css';

const Home = () => {
    const { isLoading, error, fetchEvents } = useEventResults();

    const fetchMyEventsRef = useRef();

    fetchMyEventsRef.current = fetchEvents;

    useEffect(() => {
        fetchMyEventsRef.current();
    }, []);

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
                    <Link to="/upgrade-status" className={styles.homeLink}>Legends Upgrades</Link>
                    <div className={styles.TabsContainer}></div>

                    <Outlet />

                    <MapRotation />
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

export default Home;