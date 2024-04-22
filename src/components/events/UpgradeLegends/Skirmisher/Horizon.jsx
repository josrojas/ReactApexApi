import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Horizon = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.UpgradeContainer}>
                <h2>HORIZON</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/skirmisher/horizon.jpg" width={300} height={500}></img>
                <h4>Level 2 Upgrade Options</h4>
                <p>Battery Collection</p>
                <p>Shield Battery count shown above Death Boxes.</p>
                <p>Big Bang</p>
                <p>See nearby ordnance through walls and on Death Boxes.</p>

                <h4>Level 3 Upgrade Options</h4>
                <p>Tactical Cooldown</p>
                <p>Reduce Tactical cooldown by 5 seconds.</p>
                <p>Ultimate Cooldown</p>
                <p>Reduce Ultimate cooldown by 30 seconds.</p>
            </div>
        </div>
    );
};

export default Horizon;