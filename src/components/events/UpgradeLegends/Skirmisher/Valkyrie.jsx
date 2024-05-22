import React, { useState } from 'react';
import LegendUpgrade from '../../../../assets/Valk.png';

import styles from '../../UpgradeLegends/Upgrade.module.css';

//Apply sensitive zones 
function SensitiveZone({ text, top, left }) {
    const [isShown, setIsShown] = useState(false);

    return (
        <div
            //Move mouse to sensitive zone and show description
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className={styles.circle}
        >
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
                <SensitiveZone text="<h4>Afterburners</h4>
                <p>Launch 15% higher with Skyward Dive.</p>" top={-10} left={-470}>
                </SensitiveZone>
            </div>
            <div className={styles.Zone2}>
                <SensitiveZone text="<h4>Aerial Expert</h4>
                <p>Increased horizontal Jetpack speed and acceleration.</p>" top={0} left={90}>
                </SensitiveZone>
            </div>
            <div className={styles.Zone3}>
                <SensitiveZone text="<h5>Full Coverage</h5>
              <p>Widen Missile Swarm pattern from 4x3 to 3x5.</p>" top={100} left={-470}>
                </SensitiveZone>
            </div>
            <div className={styles.Zone4}>
                <SensitiveZone text="<h5>Full Tank</h5>
              <p>Increase Jetpack fuel by 25%.</p>" top={100} left={90}>
                </SensitiveZone>
            </div>
        </div >
    );
}

const Valkyrie = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>VALKYRIE</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/skirmisher/valkyrie.jpg" alt="Valkyrie image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <img src={LegendUpgrade} alt="Valk upgrades" width={900} height={500}></img>
                <Upgrade />
            </div>
        </div>
    );
};

export default Valkyrie;