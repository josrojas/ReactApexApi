/*"https://api.mozambiquehe.re/servers?auth=YOUR_API_KEY"*/
import React, { useState, useEffect } from 'react';

import styles from './Server.module.css';


const ServerStatus = () => {
    // Define state for each piece of data
    const [ServerEuw, setServerEuw] = useState('');
    const [ServerEue, setServerEue] = useState('');


    useEffect(() => {
        const params = '';

        fetch(`https://api.mozambiquehe.re/servers?auth=${import.meta.env.VITE_APEX_API_KEY}${params?.length ? params : ''}`)
            .then(res => res.json())
            .then(data => {
                
                setServerEuw(data.Origin_Login?.SouthAmerica?.Status);
                setServerEue(data.EA_accounts?.Eu-East?.Status);

            })
            .catch(e => console.error(new Error(e)));
    }, []);

    return (
        //Consume data from the API
        <div className={styles.serverContainer}>
            <h1>Servers Status</h1>
            <h5>{`Data from apexlegendsstatus.com`}</h5>
            <div>
                <div className={styles.pbContainer}><h2>Servers List </h2></div>
                <div className={styles.dailyRotation}>{`EU-West: ${ServerEuw}`}</div>
                <div className={styles.dailyRotation}>{`EU-East: ${ServerEue}`}</div>
            </div>
        </div>

        
    );
};

export default ServerStatus;