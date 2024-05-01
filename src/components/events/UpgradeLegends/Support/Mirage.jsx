import React from 'react';
import LegendUpgrade from '../../../../assets/Mirage.jpg'

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Mirage = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>Mirage</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/support/mirage.jpg" alt="Mirage image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <img src={LegendUpgrade} alt="Mirage upgrades" width={900} height={500}></img>
            </div>
        </div>
        /*<h3>Level 2 Upgrade Options</h3>
                <h4>Miracle Worker</h4>
                <p>Allies are revived with health regen up to 75 HP.</p>
                <h4>More Me</h4>
                <p>Gain an Ultimate Decoy; reduce cooldown by 30 seconds.</p>
                --
                <h3>Level 3 Upgrade Options</h3>
                <h4>Bamboozle Bonus</h4>
                <p>Refresh Tactical on successful Bamboozles.</p>
                <h4>Me Two</h4>
                <p>Gain a Decoy charge (can have both active at once).</p>*/
    );
};

export default Mirage;