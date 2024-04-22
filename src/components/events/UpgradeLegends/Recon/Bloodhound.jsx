import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Bloodhound = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.UpgradeContainer}>
                <h2>BLOODHOUND</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/recon/bloodhound.jpg" width={300} height={500}></img>
                <h4>Level 2 Upgrade Options</h4>
                <p>Raven's Blessing</p>
                <p>White Ravens charge Ultimate by 25% when activated.</p>
                <p>Odin's Glare</p>
                <p>Double the duration of Tactical's full-body highlight.</p>

                <h4>Level 3 Upgrade Options</h4>
                <p>Tactical Cooldown</p>
                <p>Reduce Tactical cooldown by 5 seconds.</p>
                <p>Taste of Blood</p>
                <p>Gain 25 HP on knocks while Ultimate is active.</p>
            </div>
        </div>
    );
};

export default Bloodhound;