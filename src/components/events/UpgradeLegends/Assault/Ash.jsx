import React, { useState } from 'react';
import LegendUpgrade from '../../../../assets/Ash.png';

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
                <SensitiveZone text="<h4> Murder Machine</h4>
                <p>Call out the number of squads within 150 meters after a squad wipe.<p>" top={-10} left={-470}>
                </SensitiveZone>
            </div>
            <div className={styles.Zone2}>
                <SensitiveZone text="<h4> One Minute to Live</h4>
                <p>Using Passive tracks enemy position on map for 60 seconds.<p>" top={0} left={90}>
                </SensitiveZone>
            </div>
            <div className={styles.Zone3}>
                <SensitiveZone text="<h5> Greedy Snare</h5>
                <p>Arc Snare remains in play for 24 seconds and can catch multiple enemies.</p>" top={100} left={-470}>
                </SensitiveZone>
            </div>
            <div className={styles.Zone4}>
                <SensitiveZone text="<h5> Twin Snares</h5>
                <p>Gain an Arc Snare charge.</p>" top={100} left={90}>
                </SensitiveZone>
            </div>
        </div >
    );
}

const Ash = () => {
    return (
        //Show legends image and upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>ASH</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/assault/ash.jpg" alt="Ash image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <img src={LegendUpgrade} alt="Ash upgrades" width={900} height={500}></img>
                <Upgrade />
            </div>
        </div>
    );
};

export default Ash;