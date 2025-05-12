import React, { useState } from 'react';
import LegendUpgrade from '../../../../assets/Alter.webp'
import LegendProfile from '../../../../assets/AlterP.webp'

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
                    title="EYE TO ANOTHER WORLD"
                    description="Gain all Recon Perks."
                    top={-10}
                    left={-460}
                />
            </div>
            <div className={styles.Zone2}>
                <SensitiveZone
                    title="FRIENDS"
                    description="Gain all support perks."
                    top={-10}
                    left={100}
                />
            </div>
            <div className={styles.Zone3}>
                <SensitiveZone
                    title2="STARING INTO THE VOID"
                    description="Void Passage scan duration +15s for Alter."
                    top={100}
                    left={-460}
                />
            </div>
            <div className={styles.Zone4}>
                <SensitiveZone
                    title2="VOID BREACHER"
                    description="Using a friendly Void Passage grants move speed and improved reloads."
                    top={100}
                    left={100}
                />
            </div>
        </div >
    );
}

const Alter = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h3>ALTER</h3>
                <img src={LegendProfile} alt="Alter image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <img src={LegendUpgrade} alt="Alter upgrades" width={600} height={500}></img>
                <Upgrade />
            </div>
        </div>
    );
};

export default Alter;