import React, { useState } from 'react';
import LegendUpgrade from '../../../../assets/Ash.webp';

import styles from '../../UpgradeLegends/Upgrade.module.css';

// Show description in tooltip
function TooltipContent({ title, title2, description }) {
    return (
        <div>
            <h4>{title}</h4>
            <h5>{title2}</h5>
            <p>{description}</p>
        </div>
    );
}

// Component SensitiveZone
function SensitiveZone({ title, title2, description, top, left }) {
    const [isShown, setIsShown] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className={styles.square}
        >
            {isShown && (
                <div className={styles.tooltip} style={{ top: `${top}px`, left: `${left}px` }}>
                    <TooltipContent title={title} title2={title2} description={description} />
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
                <SensitiveZone
                    title="DUAL BREACH"
                    description="Adds additional ult charge."
                    top={-10}
                    left={-460}
                />
            </div>
            <div className={styles.Zone2}>
                <SensitiveZone
                    title="CHARGED KNOCK"
                    description="Gain HP regen on a knock."
                    top={-10}
                    left={100}
                />
            </div>
            <div className={styles.Zone3}>
                <SensitiveZone
                    title2="TWIN SNARES"
                    description="Gain an Arc Snare charge."
                    top={100}
                    left={-460}
                />
            </div>
            <div className={styles.Zone4}>
                <SensitiveZone
                    title2="GREEDY SNARE"
                    description="Arc Snare remains in play for 24s and can catch multiple enemies."
                    top={100}
                    left={100}
                />
            </div>
        </div >
    );
}

const Ash = () => {
    return (
        //Show legends image and upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h3>ASH</h3>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/assault/ash.jpg" alt="Ash image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <img src={LegendUpgrade} alt="Ash upgrades" width={600} height={500}></img>
                <Upgrade />
            </div>
        </div>
    );
};

export default Ash;