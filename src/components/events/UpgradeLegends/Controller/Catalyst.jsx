import React from 'react';

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
                <h3>Level 2 Upgrade Options</h3>
                <h4>Long Cast</h4>
                <p>Increase Spike throw range by 40%.</p>
                <h4>Sister Spikes</h4>
                <p>Increase max number of active Spikes by one.</p>
                --
                <h3>Level 3 Upgrade Options</h3>
                <h4>Long Veil</h4>
                <p>Increase Ultimate length by 15 meters.</p>
                <h4>Resilient Veil</h4>
                <p>Increase Ultimate lifetime by 5 seconds.</p>
            </div>
        </div>
    );
};

export default Catalyst;