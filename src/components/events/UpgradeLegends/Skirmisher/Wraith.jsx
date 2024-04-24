import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Wraith = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>WRAITH</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/skirmisher/wraith.jpg" alt="Wraith image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <h4>Level 2 Upgrade Options</h4>
                <p>Sixth Sense</p>
                <p>Passive warns when nearby squad count increases.</p>
                <p>Ultimate Cooldown+</p>
                <p>Reduce Ultimate cooldown by 60 seconds.</p>

                <h4>Level 3 Upgrade Options</h4>
                <p>Fast Phase</p>
                <p>Reduce Tactical wind-up by 20%.</p>
                <p>Tactical Cooldown</p>
                <p>Reduce Tactical cooldown by 5 seconds.</p>
            </div>
        </div>
    );
};

export default Wraith;