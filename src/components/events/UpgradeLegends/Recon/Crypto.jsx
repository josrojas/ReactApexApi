import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Crypto = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.UpgradeContainer}>
                <h2>CRYPTO</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/recon/crypto.jpg" width={300} height={500}></img>
                <h4>Level 2 Upgrade Options</h4>
                <p>Tactical Cooldown+</p>
                <p>Reduce Tactical cooldown by 10 seconds.</p>
                <p>Ultimate Cooldown</p>
                <p>Reduce Ultimate cooldown by 30 seconds.</p>

                <h4>Level 3 Upgrade Options</h4>
                <p>Network Expansion</p>
                <p>Increase Neurolink and EMP range by 25%.</p>
                <p>Network Traffic</p>
                <p>Deploying the Drone calls out squads in the area.</p>
            </div>
        </div>
    );
};

export default Crypto;