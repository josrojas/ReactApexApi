import React from 'react';
import WattsonUpgrade from '../../../../assets/Wattson.jpg'

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Wattson = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>WATTSON</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/controller/wattson.jpg" alt="Wattson image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <img src={WattsonUpgrade} alt="Wattson upgrades" width={900} height={500}></img>
            </div>
        </div>
        /*<h3>Level 2 Upgrade Options</h3>
             <h4>Falling Stars</h4>
             <p>Pylon interceptions spawn Arc Stars at its base.</p>
             <h4>Fresh Start</h4>
             <p>Allies are revived with 50 HP.</p>
             --
             <h3>Level 3 Upgrade Options</h3>
             <h4>Power Pylon</h4>
             <p>Double Ultimate's HP and Shield Regen capacity.</p>
             <h4>Split Circuit</h4>
             <p>Place up to 2 Pylons with half the shield regen capacity <br></br> and use Ultimate Accelerants twice as fast.</p>*/
    );
};

export default Wattson;