import React from 'react';
import LegendUpgrade from '../../../../assets/Vantage.jpg'

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
                <img src={LegendUpgrade} alt="Vantage upgrades" width={900} height={500}></img>
            </div>
        </div>
        /*<h3>Level 2 Upgrade Options</h3>
               <h4>Ringmaster</h4>
               <p>Gain access to Ring Consoles.</p>
               <h4>Ultimate Reload</h4>
               <p>Ultimate Accelerants grant +2 bullets.</p>
               --
               <h3>Level 3 Upgrade Options</h3>
               <h4>Bat Bounce</h4>
               <p>Improved Tactical's double-jump.</p>
               <h4>Sharpshooter</h4>
               <p>Refresh Tactical on hits with Ultimate.</p>*/
    );
};

export default Vantage;