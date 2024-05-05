import React from 'react';
import LegendUpgrade from '../../../../assets/Alter.png'

import styles from '../../UpgradeLegends/Skirmisher/alter.module.css';

const Alter = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.UpgradeContainer}>
                <img src={LegendUpgrade} alt="Alter upgrades" width={1100} height={600}></img>
            </div>
        </div>
        /*<h3>Level 2 Upgrade Options</h3>
                <h4>Frequent Nexus</h4>
                <p>Ultimate cooldown reduce by 30s.</p>
                <h4>Seeing with portals</h4>
                <p>Highlight persist after tac phase. See enemy health bars after exiting portal.</p>
                --
                <h3>Level 3 Upgrade Options</h3>
                <h4>Unending Nexus</h4>
                <p>Void Nexus no longer times out.</p>
                <h4>Tactical Cooldown+</h4>
                <p>Reduce Tactical cooldown by 10 seconds.</p>*/
    );
};

export default Alter;