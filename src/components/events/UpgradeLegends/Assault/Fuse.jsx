import React from 'react';
import LegendUpgrade from '../../../../assets/Fuse.jpg'

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
                <img src={LegendUpgrade} alt="Fuse upgrades" width={900} height={500}></img>
            </div>
        </div>
        /*<h3>Level 2 Upgrade Options</h3>
                <h4>Big Bang</h4>
                <p>See nearby ordnance through walls and on Death Boxes.</p>
                <h4>Scar Tissue</h4>
                <p>Take 50% less damage and no slow effects from The Motherlode.</p>
                --
                <h3>Level 3 Upgrade Options</h3>
                <h4>Knuckle Hustler</h4>
                <p>Short speed boost on successful Knuckle Cluster hit.</p>
                <h4>Wreckless</h4>
                <p>Take 50% less explosive damage.</p>*/
    );
};

export default Fuse;