import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Loba = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>Loba</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/support/loba.jpg" alt="Loba image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <h3>Level 2 Upgrade Options</h3>
                <h4>High Value</h4>
                <p>Increase Tactical height and range.</p>
                <h4>Market Expansion</h4>
                <p>Increase Ultimate range by 25%.</p>
                --
                <h3>Level 3 Upgrade Options</h3>
                <h4>Shopping Spree</h4>
                <p>Loba can take an extra item from Black Markets.</p>
                <h4>Tactical Cooldown</h4>
                <p>Reduce Tactical cooldown by 5 seconds.</p>
            </div>
        </div>
    );
};

export default Loba;