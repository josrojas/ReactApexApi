import React from 'react';
import LegendUpgrade from '../../../../assets/Crypto.png'

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Crypto = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>CRYPTO</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/recon/crypto.jpg" alt="Crypto image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <img src={LegendUpgrade} alt="Crypto upgrades" width={900} height={500}></img>
            </div>
        </div>
        /*<h3>Level 2 Upgrade Options</h3>
                <h4>Network Expansion</h4>
                <p>Passive & Ult range increased by 25%.</p>
                <h4>Quick Transmission</h4>
                <p>Improved drone handling.</p>
                --
                <h3>Level 3 Upgrade Options</h3>
                <h4>Hackathon</h4>
                <p>Double drone recharge rate; gain speed boost when it explodes.</p>
                <h4>Satellite Imagery</h4>
                <p>Drone scan persists for 1.5 seconds.</p>*/
    );
};

export default Crypto;