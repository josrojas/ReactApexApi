import { useState } from 'react';
import styles from './upgrade.module.css';

// Tooltip component
function TooltipContent({ title, description }) {
    return (
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
}

// Sensitive zone component
function SensitiveZone({ title, description, top, left }) {
    const [isShown, setIsShown] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className={styles.square}
        >
            {isShown && (
                <div 
                    className={styles.tooltip} 
                    style={{ top: `${top}px`, left: `${left}px` }}
                >
                    <TooltipContent title={title} description={description} />
                </div>
            )}
        </div>
    );
}

// Upgrades container
function UpgradeZones({ upgrades }) {
    return (
        <div className={styles.SensitiveZone}>
            {upgrades.map((upgrade) => (
                <div key={upgrade.id} className={styles[upgrade.zone]}>
                    <SensitiveZone
                        title={upgrade.title}
                        description={upgrade.description}
                        top={upgrade.tooltipPosition.top}
                        left={upgrade.tooltipPosition.left}
                    />
                </div>
            ))}
        </div>
    );
}

// Main component
const LegendCard = ({ legendData }) => {
    return (
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h3>{legendData.name}</h3>
                <img 
                    src={legendData.characterImage} 
                    alt={`${legendData.name} character`}
                    className={styles.characterImage}
                />
            </div>
            
            <div className={styles.UpgradeContainer}>
                <img 
                    src={legendData.upgradeImage} 
                    alt={`${legendData.name} upgrades`}
                    className={styles.upgradeImage}
                />
                <UpgradeZones upgrades={legendData.upgrades} />
            </div>
        </div>
    );
};

export default LegendCard;