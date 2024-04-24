import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

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
                <h4>Level 2 Upgrade Options</h4>
                <p>Big Bang</p>
                <p>See nearby ordnance through walls and on Death Boxes.</p>
                <p>Scar Tissue</p>
                <p>Take 50% less damage and no slow effects from The Motherlode.</p>

                <h4>Level 3 Upgrade Options</h4>
                <p>Knuckle Hustler</p>
                <p>Short speed boost on successful Knuckle Cluster hit.</p>
                <p>Wreckless</p>
                <p>Take 50% less explosive damage.</p>
            </div>
        </div>
    );
};

export default Fuse;