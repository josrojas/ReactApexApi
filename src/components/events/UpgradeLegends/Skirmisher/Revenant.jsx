import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Revenant = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>REVENANT</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/skirmisher/revenant.jpg" alt="Revenant image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <h3>Level 2 Upgrade Options</h3>
                <h4>Murder Machine</h4>
                <p>Call out the number of squads within 150 meters after a squad wipe.</p>
                <h4>Ultimate Cooldown</h4>
                <p>Reduces Ult Cooldown by 30s.</p>
                --
                <h3>Level 3 Upgrade Options</h3>
                <h4>Tactical Cooldown</h4>
                <p>Reduce Tactical cooldown by 5 seconds.</p>
                <h4>Grim Leaper</h4>
                <p>Shadow Pounce cooldown reset on knock.</p>
            </div>
        </div>
    );
};

export default Revenant;