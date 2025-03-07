import { Link, Outlet } from "react-router-dom";
import { useState, useRef, useCallback, useMemo } from 'react';

import Navbar from '../../components/Navbar';
import Events from '../../components/events';
import useEventResults from '../../state/event-results';
import { Tabs } from "../../components/events/Tabs/Tabs";

import styles from "./UpgradesPage.module.css";
import styled from "styled-components";

const Container = styled.main`
    height: 100vh;
`
const Upgrades = () => {

    const { data, isLoading, error, fetchEvents } = useEventResults();
    const events = useMemo(() => data?._embedded?.events || [], [data?._embedded?.events]);
    const page = useMemo(() => data?.page || {}, [data?.page]);

    const [searchTerm, setSearchTerm] = useState('')
    const containerRef = useRef();
    const fetchMyEventsRef = useRef();

    const handleNavbarSearch = (term) => {
        setSearchTerm(term);
        fetchEvents(`&keyword = ${term}`);
    };

    const handlePageClick = useCallback(({ selected }) => {
        fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
    }, [searchTerm, fetchEvents]);

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
                    <Link to="/maps" className={`${styles.homeLink} ${styles.button}`}>
                        Maps rotation
                    </Link>
                    <div className={styles.TabsContainer}></div>

                    <Outlet />

                    <Events searchTerm={searchTerm} events={events} />
                    <Container>
                        <h1>Legends Upgrades</h1>
                        <Tabs />
                    </Container>
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

export default Upgrades;