import { Link, Outlet } from "react-router-dom";

import Legends from '../../components/Navbar';
import useEventResults from '../../state/event-results';

import styles from "./UpgradesPage.module.css";
import styled from "styled-components";

const Container = styled.main`
    height: 100vh;
`
const Upgrades = () => {

    const { isLoading, error } = useEventResults();


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
                    <Link to="/maps" className={`${styles.button}`}>
                        Maps rotation
                    </Link>

                    <Outlet />

                    <Container>
                        <h1>Legends Upgrades</h1>
                        <Legends />
                    </Container>
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

export default Upgrades;