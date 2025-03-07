import { Link } from "react-router-dom";
import { useRef, useEffect } from 'react';

import useEventResults from '../../state/event-results';
import TabComponent from "../../components/events/Tabs/TabsMaps";
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
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>An error has occur</div>;
        }

        return (
            <div>
                <>
                    <Link to="/" className={`${styles.homeLink} ${styles.button}`}>
                        Legends Upgrades
                    </Link>
                    
                    <div className={styles.TabsContainer}></div>
                    <h1>Current Apex Legends map rotation</h1>
                    <TabComponent />
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