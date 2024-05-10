import React from 'react';
import LegendUpgrade from '../../../../assets/Conduit.png'

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Conduit = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>CONDUIT</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/support/conduit.jpg" alt="Conduit image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <img src={LegendUpgrade} alt="Conduit upgrades" width={900} height={500}></img>
            </div>
        </div>
        /*<h3>Level 2 Upgrade Options</h3>
               <h4>Battpack</h4>
               <p>Stack up to 3 batteries per inventory slot.</p>
               <h4>Bigger Jam</h4>
               <p>Jammer damage radius increased by 20%.</p>
               --
               <h3>Level 3 Upgrade Options</h3>
               <h4>Split Charge</h4>
               <p>Gain a Tactical charge but halve shield regen duration.</p>
               <h4>Radiant Transfer</h4>
               <p>Increase Tactical range by 10 meters.</p>*/
    );
};

export default Conduit;