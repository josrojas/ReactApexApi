/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './Upgrade.module.css';

// Tooltip component
function TooltipContent({ title, description, titleColor }) {
    return (
        <div>
            <h4 style={{ color: titleColor }}>{title}</h4>
            <p>{description}</p>
        </div>
    );
}

// Sensitive zone component
function SensitiveZone({ title, description, top, left, titleColor }) {
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
                    <TooltipContent 
                        title={title} 
                        description={description}
                        titleColor={titleColor}
                    />
                </div>
            )}
        </div>
    );
}

// Upgrades container
function UpgradeZones({ upgrades }) {
    // Color by ID
    const getTitleColor = (upgradeId) => {
        if (upgradeId === 1 || upgradeId === 2) {
            return '#2e6bee';
        }
        return '#c82eee';
    };

    return (
        <div className={styles.SensitiveZone}>
            {upgrades.map((upgrade) => (
                <div key={upgrade.id} className={styles[upgrade.zone]}>
                    <SensitiveZone
                        title={upgrade.title}
                        description={upgrade.description}
                        top={upgrade.tooltipPosition.top}
                        left={upgrade.tooltipPosition.left}
                        titleColor={getTitleColor(upgrade.id)}
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