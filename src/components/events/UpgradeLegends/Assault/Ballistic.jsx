import React, { useState } from 'react';
import LegendUpgrade from '../../../../assets/Ballistic.png';

import styles from '../../UpgradeLegends/Upgrade.module.css';

function SensitiveZone({ children, text, top, left }) {
    const [isShown, setIsShown] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            onClick={() => alert(text)}
            className={styles.circle}
        >
            {children}
            {isShown && (
                <div className={styles.tooltip}
                    style={{ top: `${top}px`, left: `${left}px` }}
                    dangerouslySetInnerHTML={{ __html: text }}>
                </div>
            )}
        </div>
    );
}

function Upgrade() {
    return (
        <div className={styles.SensitiveZone}>
            <div className={styles.Zone1}>
                <SensitiveZone text="<h4>Lasting Bullet</h4>
              <p>Smart Bullet duration is tripled.</p>" top={-10} left={-470}>
                </SensitiveZone>
            </div>
            <div className={styles.Zone2}>
                <SensitiveZone text="<h4>Sling-Shot</h4>
              <p>Sling weapon levels up with each upgrade selection.</p>" top={0} left={90}>
                </SensitiveZone>
            </div>
            <div className={styles.Zone3}>
                <SensitiveZone text="<h5>Extra Bullet</h5>
              <p>Gain a Smart Bullet charge.</p>" top={100} left={-470}>
                </SensitiveZone>
            </div>
            <div className={styles.Zone4}>
                <SensitiveZone text="<h5>Speedy Whistler</h5>
              <p>Successful hits with Tactical give a 2s burst of speed.</p>" top={100} left={90}>
                </SensitiveZone>
            </div>
        </div >
    );
}

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
                <img src={LegendUpgrade} alt="Ballistic upgrades" width={900} height={500}></img>
                <Upgrade />
            </div>
        </div>
    );
};

export default Ballistic;