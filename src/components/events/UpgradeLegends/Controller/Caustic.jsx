import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Caustic = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>CAUSTIC</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/controller/caustic.jpg" alt="Caustic image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <h3>Level 2 Upgrade Options</h3>
                <h4>Parabolic Force</h4>
                <p>Increase Tactical throw range by 75%.</p>
                <h4>Residual Toxins</h4>
                <p>Nox Vision persists for longer.</p>
                --
                <h3>Level 3 Upgrade Options</h3>
                <h4>Breathe It In</h4>
                <p>Regenerate HP while enveloped in Nox Gas.</p>
                <h4>Particle Diffuser</h4>
                <p>Increase Ultimate area of effect by 50%.</p>
            </div>
        </div>
    );
};

export default Caustic;