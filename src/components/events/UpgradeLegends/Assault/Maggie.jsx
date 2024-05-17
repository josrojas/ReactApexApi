import React, { useState } from 'react';
import LegendUpgrade from '../../../../assets/Maggie.png';

import styles from '../../UpgradeLegends/Upgrade.module.css';

//Apply sensitive zones 
function SensitiveZone({ children, text, top, left }) {
    const [isShown, setIsShown] = useState(false);

    return (
        <div
            //Move mouse to sensitive zone and show description
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className={styles.circle}
        >
            {children}
            {isShown && (
                //Tooltip to move the text box to certain directions 
                <div className={styles.tooltip}
                    style={{ top: `${top}px`, left: `${left}px` }}
                    //Add h4 and p text to edit in css
                    dangerouslySetInnerHTML={{ __html: text }}>
                </div>
            )}
        </div>
    );
}

//Function to add sensitive zones to the image and show upgrades description 
function Upgrade() {
    return (
        <div className={styles.SensitiveZone}>
            <div className={styles.Zone1}>
                <SensitiveZone text="<h4>Shots Shots Shots</h4>
                <p>Auto-Reload shotguns on knock.</p>" top={-10} left={-470}>
                </SensitiveZone>
            </div>
            <div className={styles.Zone2}>
                <SensitiveZone text="<h4>Fire Ball</h4>
                <p>Wrecking Ball catches fire and explodes in thermite.</p>" top={0} left={90}>
                </SensitiveZone>
            </div>
            <div className={styles.Zone3}>
                <SensitiveZone text="<h5>Drillslinger</h5>
                <p>Gain a Riot Drill charge; reduce active duration by 25%.</p>" top={100} left={-470}>
                </SensitiveZone>
            </div>
            <div className={styles.Zone4}>
                <SensitiveZone text="<h5>Big Drill</h5>
                <p>Increase depth and width of Tactical by 50%.</p>" top={100} left={90}>
                </SensitiveZone>
            </div>
        </div >
    );
}

const Maggie = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>MAD MAGGIE</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/assault/mad-maggie.jpg" alt="Maggie image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <img src={LegendUpgrade} alt="Maggie upgrades" width={900} height={500}></img>
                <Upgrade />
            </div>
        </div>
    );
};

export default Maggie;