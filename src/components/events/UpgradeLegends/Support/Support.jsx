import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Support = () => {

    return (
        //Show legends upgrades
      
            <div className={styles.Container}>
                <div className={styles.UpgradeContainer}>
                    <h2>CONDUIT</h2>
                    <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/support/conduit.jpg" width={300} height={500}></img>
                    <h4>Level 2 Upgrade Options</h4>
                    <p>Battery Collection</p>
                    <p>Shield Battery count shown above Death Boxes.</p>
                    <p>Radiant Transfer</p>
                    <p>Increase Tactical range by 10 meters.</p>

                    <h4>Level 3 Upgrade Options</h4>
                    <p>Bigger Jam</p>
                    <p>Each Ultimate jammer's damage radius increased by 10%.</p>
                    <p>Split Charge</p>
                    <p>Gain a Tactical charge but halve shield regen duration.</p>
                </div>
            </div>
      


    );
};

export default Support;