/*https://api.mozambiquehe.re/crafting?auth=*/
import React, { useState, useEffect } from 'react';

import styles from './Crafting.module.css';


const CraftingRotation = () => {
    // Define state for each piece of data
    const [craft, setCraft] = useState('');

    const [assetDa, setAssetDa] = useState('');

    useEffect(() => {
        const params = '';

        fetch(`https://api.mozambiquehe.re/crafting?auth=${import.meta.env.VITE_APEX_API_KEY}&version=2${params?.length ? params : ''}`)
            .then(res => res.json())
            .then(data => {
                setAssetDa(data.bundleType?.bundleContent?.itemType?.asset);
                setCraft(data.bundleContent?.itemType?.name);
            })
            .catch(e => console.error(new Error(e)));
    }, []);

    return (
        //Consume data from the API
        <div className={styles.craftContainer}>
            <h1>Crafting rotation</h1>
            <div>
                <div className={styles.pbContainer}><h2>Daily </h2></div>
                <div className={styles.img}><img src={assetDa} alt="Crafting" /></div>
                <div className={styles.dailyRotation}>{`Daily rotation: ${craft}`}</div>
            </div>
        </div>
    );
};

export default CraftingRotation;
