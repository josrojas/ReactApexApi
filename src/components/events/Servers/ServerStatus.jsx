
import React, { useState, useEffect } from 'react';

import styles from './Server.module.css';


const ServerStatus = () => {
    // Define state for each piece of data
    const [ServerEuw, setServerEuw] = useState('');
    const [ServerEue, setServerEue] = useState('');


    useEffect(() => {

        fetch(`https://api.mozambiquehe.re/servers?auth=${import.meta.env.VITE_APEX_API_KEY}`)
            .then(res => res.json())
            .then(data => {

                setServerEuw(data.Origin_Login?.West?.Status);
                setServerEue(data.EA_accounts?.East?.Status);

            })
            .catch(e => console.error(new Error(e)));
    }, []);

    return (
        //Consume data from the API
        <div className={styles.serverContainer}>
            <h1>Servers Status</h1>

            <div className={styles.pbContainer}>
                <h2>Servers List </h2>
                <div className={styles.dailyRotation}>{`EU-West: ${ServerEuw}`}</div>
                <div className={styles.dailyRotation}>{`EU-East: ${ServerEue}`}</div>
            </div>
            <h5>{`Data from apexlegendsstatus.com`}</h5>
        </div>


    );
};

export default ServerStatus;