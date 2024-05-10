import React from 'react';
import CatalystUpgrade from '../../../../assets/Catalyst.png'

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Catalyst = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>CATALYST</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/controller/catalyst.jpg" alt="Catalyst image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <img src={CatalystUpgrade} alt="Catalyst upgrades" width={900} height={500}></img>
            </div>
        </div>
        /*<h3>Level 2 Upgrade Options</h3>
           <h4>Long Veil</h4>
           <p>Increase Ultimate length by 15m.</p>
           <h4>Sister Spikes</h4>
           <p>Increase max number of active Spikes by one.</p>
           --
           <h3>Level 3 Upgrade Options</h3>
           <h4>Ferro-Door</h4>
           <p>Fully rebuild and reinforce missing doors with Passive.</p>
           <h4>Resilient Veil</h4>
           <p>Increase Ultimate lifetime by 5 seconds.</p>*/
    );
};

export default Catalyst;