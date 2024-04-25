import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Newcastle = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>Newcastle</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/support/newcastle.jpg" alt="Newcastle image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <h3>Level 2 Upgrade Options</h3>
                <h4>Swift Shield</h4>
                <p>Increase Mobile Shield speed to weapon sprint speed.</p>
                <h4>Thick Shield</h4>
                <p>Mobile Shield segments gain 250 HP.</p>
                --
                <h3>Level 3 Upgrade Options</h3>
                <h4>Miracle Worker</h4>
                <p>Allies are revived with health regen up to 75 HP.</p>
                <h4>Stronghold</h4>
                <p>+250 Castle Wall HP; extend energized barrier duration to 2 minutes.</p>
            </div>
        </div>
    );
};

export default Newcastle;