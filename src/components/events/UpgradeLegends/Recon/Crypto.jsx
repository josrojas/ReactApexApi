import React from 'react';
import LegendUpgrade from '../../../../assets/Crypto.jpg'

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
                <h4>Tactical Cooldown+</h4>
                <p>Reduce Tactical cooldown by 10 seconds.</p>
                <h4>Ultimate Cooldown</h4>
                <p>Reduce Ultimate cooldown by 30 seconds.</p>
                --
                <h3>Level 3 Upgrade Options</h3>
                <h4>Network Expansion</h4>
                <p>Increase Neurolink and EMP range by 25%.</p>
                <h4>Network Traffic</h4>
                <p>Deploying the Drone calls out squads in the area.</p>*/
    );
};

export default Crypto;