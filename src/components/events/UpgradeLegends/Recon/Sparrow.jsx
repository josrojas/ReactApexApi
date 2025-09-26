import React, { useState } from 'react';
import LegendUpgrade from '../../../../assets/Sparrow.webp';

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
                    title="EXTRA TRAPS"
                    description="Gain an additional Tactical charge and +1 traps in world."
                    top={-10}
                    left={-460}
                />
            </div>
            <div className={styles.Zone2}>
                <SensitiveZone
                    title="HUNT TARGET"
                    description="Gains a speed boost when running towards a marked enemy."
                    top={-10}
                    left={100}
                />
            </div>
            <div className={styles.Zone3}>
                <SensitiveZone
                    title2="ALTERNATE MODE"
                    description="Ult now has 3 charges that fire fewer pulses in a smaller radius."
                    top={100}
                    left={-460}
                />
            </div>
            <div className={styles.Zone4}>
                <SensitiveZone
                    title2="LIFE SIPHON"
                    description="Sparrow's health and shields are recovered if enemies are damaged by his Ult."
                    top={100}
                    left={100}
                />
            </div>
        </div >
    );
}

const Sparrow = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h3>SPARROW</h3>
                <img src="https://i0.wp.com/ultimasnoticias.com.ve/wp-content/uploads/2025/04/Apex-Legends-revela-a-Sparrow-la-nueva-leyenda-que-llega-en-la-Temporada-25-ProGamers.life_.png" alt="Sparrow image"
                    width={400} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <img src={LegendUpgrade} alt="Sparrow upgrades" width={580} height={500}></img>
                <Upgrade />
            </div>
        </div>
    );
};

export default Sparrow;