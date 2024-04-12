import React from 'react';

import styles from './Upgrade.module.css';


const UpgradesStatus = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <h1>Legends Upgrades</h1>

            <div className={styles.upgradeContainer}>
                <div className={styles.pbContainer}>
                    <h2>Assault</h2>
                    <h3>Ashe</h3>
                    <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/assault/ash.jpg" width={300} height={500}></img>
                    <h4>Level 2 Upgrade Options</h4>
                    <p>Murder Machine.</p>
                    <p>Call out the number of squads within 150 meters after a squad wipe.</p>
                    <p>One Minute to Live.</p>
                    <p>	Using Passive tracks enemy position on map for 60 seconds.</p>

                    <h4>Level 3 Upgrade Options</h4>
                    <p>Greedy Snare</p>
                    <p>Arc Snare remains in play for 24 seconds and can catch multiple enemies.</p>
                    <p>Twin Snares</p>
                    <p>Gain an Arc Snare charge.</p>
                </div>
            </div>
        </div>


    );
};

export default UpgradesStatus;