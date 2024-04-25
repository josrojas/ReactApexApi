import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Ballistic = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>BALLISTIC</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/assault/ballistic.jpg" alt="Ballistic image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <h3>Level 2 Upgrade Options</h3>
                <h4>Lasting Bullet</h4>
                <p>Smart Bullet duration is tripled.</p>
                <h4>Care Package Insight</h4>
                <p>Reveal the most valuable item in Care Packages.</p>
                --
                <h3>Level 3 Upgrade Options</h3>
                <h4>Extra Bullet</h4>
                <p>Gain a Smart Bullet charge.</p>
                <h4>Speedy Whistler</h4>
                <p>Successful hits with Tactical give a 2s burst of speed.</p>
            </div>
        </div>
    );
};

export default Ballistic;