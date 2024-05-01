import React from 'react';
import LegendUpgrade from '../../../../assets/Seer.jpg'

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
                <img src={LegendUpgrade} alt="Seer upgrades" width={900} height={500}></img>
            </div>
        </div>
        /*<h3>Level 2 Upgrade Options</h3>
           <h4>Artist's Reach</h4>
           <p>Increase the throw range of Ultimate by 20 meters.</p>
           <h4>Ultimate Cooldown</h4>
           <p>Reduce Ultimate cooldown by 30 seconds.</p>
           --
           <h3>Level 3 Upgrade Options</h3>
           <h4>Long View</h4>
           <p>Increase Passive and Tactical range to 75m.</p>
           <h4>Focus Scan</h4>
           <p>Increase Tactical scan duration by 1.5 seconds.</p>*/
    );
};

export default Seer;