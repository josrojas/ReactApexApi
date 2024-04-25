import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Horizon = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>HORIZON</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/skirmisher/horizon.jpg" alt="Horizon image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <h3>Level 2 Upgrade Options</h3>
                <h4>Battery Collection</h4>
                <p>Shield Battery count shown above Death Boxes.</p>
                <h4>Big Bang</h4>
                <p>See nearby ordnance through walls and on Death Boxes.</p>
                --
                <h3>Level 3 Upgrade Options</h3>
                <h4>Tactical Cooldown</h4>
                <p>Reduce Tactical cooldown by 5 seconds.</p>
                <h4>Ultimate Cooldown</h4>
                <p>Reduce Ultimate cooldown by 30 seconds.</p>
            </div>
        </div>
    );
};

export default Horizon;