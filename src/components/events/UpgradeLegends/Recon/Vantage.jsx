import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Vantage = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>VANTAGE</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/recon/vantage.jpg" alt="Vantage image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <h4>Level 2 Upgrade Options</h4>
                <p>Ringmaster</p>
                <p>Gain access to Ring Consoles.</p>
                <p>Ultimate Reload</p>
                <p>Ultimate Accelerants grant +2 bullets.</p>

                <h4>Level 3 Upgrade Options</h4>
                <p>Bat Bounce</p>
                <p>Improved Tactical's double-jump.</p>
                <p>Sharpshooter</p>
                <p>Refresh Tactical on hits with Ultimate.</p>
            </div>
        </div>
    );
};

export default Vantage;