import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Seer = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>SEER</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/recon/seer.jpg" alt="Seer image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <h4>Level 2 Upgrade Options</h4>
                <p>Artist's Reach</p>
                <p>Increase the throw range of Ultimate by 20 meters.</p>
                <p>Ultimate Cooldown</p>
                <p>Reduce Ultimate cooldown by 30 seconds.</p>

                <h4>Level 3 Upgrade Options</h4>
                <p>Long View</p>
                <p>Increase Passive and Tactical range to 75m.</p>
                <p>Focus Scan</p>
                <p>Increase Tactical scan duration by 1.5 seconds.</p>
            </div>
        </div>
    );
};

export default Seer;