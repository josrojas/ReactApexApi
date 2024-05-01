import React from 'react';
import RampartUpgrade from '../../../../assets/Rampart.jpg'

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Rampart = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>RAMPART</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/controller/rampart.jpg" alt="Rampart image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <img src={RampartUpgrade} alt="Rampart upgrades" width={900} height={500}></img>
            </div>
        </div>
        /*<h3>Level 2 Upgrade Options</h3>
              <h4>Bandolier</h4>
              <p>Carry extra ammo per stack.</p>
              <h4>Ultimate Cooldown</h4>
              <p>Reduce Ultimate cooldown by 30 seconds.</p>
              --
              <h3>Level 3 Upgrade Options</h3>
              <h4>Amped Reloads</h4>
              <p>Reload faster with Sheila or when behind Amped Cover.</p>
              <h4>Ramped Up</h4>
              <p>Improved Mobile Sheila handling and spin up time by 20%.</p>*/
    );
};

export default Rampart;