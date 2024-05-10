import React from 'react';
import LegendUpgrade from '../../../../assets/Bloodhound.png'

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Bloodhound = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>BLOODHOUND</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/recon/bloodhound.jpg" alt="Bloodhound image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <img src={LegendUpgrade} alt="Bloodhound upgrades" width={900} height={500}></img>
            </div>
        </div>
        /*<h3>Level 2 Upgrade Options</h3>
             <h4>Raven's Blessing</h4>
             <p>White Ravens charge Ultimate by 25% when activated.</p>
             <h4>Odin's Glare</h4>
             <p>Double the duration of Tactical's full-body highlight.</p>
             --
             <h3>Level 3 Upgrade Options</h3>
             <h4>Long Hunt</h4>
             <p>Knocks extend Beast of the Hunt duration.</p>
             <h4>Taste of Blood</h4>
             <p>Gain 50 hp on knocks while Ultimate is active.</p>*/
    );
};

export default Bloodhound;