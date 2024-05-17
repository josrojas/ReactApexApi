import React, { useState } from 'react';
import LegendUpgrade from '../../../../assets/Fuse.png';

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
                <SensitiveZone text="<h4>Ring Master</h4>
                <p>Gain access to Ring Consoles.</p>" top={-10} left={-470}>
                </SensitiveZone>
            </div>
            <div className={styles.Zone2}>
                <SensitiveZone text="<h4>Scar Tissue</h4>
                <p>Take 20 damage and ignore slow effects from The Motherlode.</p>" top={0} left={90}>
                </SensitiveZone>
            </div>
            <div className={styles.Zone3}>
                <SensitiveZone text="<h5>Knuckle Hustler</h5>
                <p>Short speed boost on successful Knuckle Cluster hit.</p>" top={100} left={-470}>
                </SensitiveZone>
            </div>
            <div className={styles.Zone4}>
                <SensitiveZone text="<h5>Wreckless</h5>
                <p>Take 50% less explosive damage.</p>" top={100} left={90}>
                </SensitiveZone>
            </div>
        </div >
    );
}

const Fuse = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>FUSE</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/assault/fuse.jpg" alt="Fuse image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <img src={LegendUpgrade} alt="Fuse upgrades" width={900} height={500}></img>
                <Upgrade />
            </div>
        </div>
    );
};

export default Fuse;