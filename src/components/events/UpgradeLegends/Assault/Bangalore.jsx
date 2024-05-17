import React, { useState } from 'react';
import LegendUpgrade from '../../../../assets/Bangalore.png';

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
                <SensitiveZone text="<h4>Tactical Cooldown</h4>
               <p>Reduces Tactical cooldown by 5s.</p>" top={-10} left={-470}>
                </SensitiveZone>
            </div>
            <div className={styles.Zone2}>
                <SensitiveZone text="<h4>Ultimate Cooldown+</h4>
               <p>Reduce Ultimate cooldown by 60 seconds.</p>" top={0} left={90}>
                </SensitiveZone>
            </div>
            <div className={styles.Zone3}>
                <SensitiveZone text="<h5>Cover Me</h5>
               <p>Point you in the right direction enemies who trigger Double Time.</p>" top={100} left={-470}>
                </SensitiveZone>
            </div>
            <div className={styles.Zone4}>
                <SensitiveZone text="<h5>Refuge</h5>
               <p>Regenerate 3.5 HP/s while inside Smoke.</p>" top={100} left={90}>
                </SensitiveZone>
            </div>
        </div >
    );
}

const Bangalore = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>BANGALORE</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/assault/bangalore.jpg" alt="Bangalore image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <img src={LegendUpgrade} alt="Bangalore upgrades" width={900} height={500}></img>
                <Upgrade />
            </div>
        </div>
    );
};

export default Bangalore;