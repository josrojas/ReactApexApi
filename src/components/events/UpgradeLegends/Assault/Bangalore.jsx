import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Bangalore = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>BANGALORE</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/assault/bangalore.jpg" alt="Ash image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <h4>Level 2 Upgrade Options</h4>
                <p>Tactical Cooldown</p>
                <p>Reduces Tactical cooldown by 5s.</p>
                <p>Ultimate Cooldown+</p>
                <p>Reduce Ultimate cooldown by 60 seconds.</p>

                <h4>Level 3 Upgrade Options</h4>
                <p>Cover Me</p>
                <p>Point you in the right direction enemies who trigger Double Time.</p>
                <p>Refuge</p>
                <p>Regenerate 3.5 HP/s while inside Smoke.</p>
            </div>
        </div>
    );
};

export default Bangalore;