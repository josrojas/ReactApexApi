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
                <h4>Level 2 Upgrade Options</h4>
                <p>Murder Machine</p>
                <p>Call out the number of squads within 150 meters after a squad wipe.</p>
                <p>Ultimate Cooldown</p>
                <p>Reduces Ult Cooldown by 30s.</p>

                <h4>Level 3 Upgrade Options</h4>
                <p>Tactical Cooldown</p>
                <p>Reduce Tactical cooldown by 5 seconds.</p>
                <p>Grim Leaper</p>
                <p>Shadow Pounce cooldown reset on knock.</p>
            </div>
        </div>
    );
};

export default Revenant;