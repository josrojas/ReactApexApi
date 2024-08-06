import { useState } from "react";
import BattleRoyale from '../Maps/BattleRoyale';
import Ranked from '../Maps/Ranked';
import Mixtape from '../Maps/Mixtape';
import styles from './TabsMaps.module.css';
import styled from "styled-components";

export function TabComponent() {
    const [activetab, setactivetab] = useState(0);
    const select = (index) => {
        setactivetab(index);
    };
    return (
        <Container activetab={`${activetab}00%`}>
            <ul className="tabs">
                <li className={activetab == 0 ? "active" : ""} onClick={() => select(0)}>
                    Battle Royale
                </li>
                <li className={activetab == 1 ? "active" : ""} onClick={() => select(1)}>
                    Ranked
                </li>
                <li className={activetab == 2 ? "active" : ""} onClick={() => select(2)}>
                    Mixtape
                </li>
                <span className="indicator"></span>
            </ul>

            <div className="tab-content">
                {activetab === 0 && <div className={styles.class}><BattleRoyale /></div>}
                {activetab === 1 && <div className={styles.class}><Ranked /></div>}
                {activetab === 2 && <div className={styles.class}><Mixtape /></div>}
            </div>
           
        </Container>
    );
}

const Container = styled.div`
position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 100px;
    width: 100%;
    height: 30%;
    background-color: #242424;
    padding: 0px;
    color: #0f0f0f;
    
    .tabs{
        list-style: none;
        display: flex;
        box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.1);
        background-color: #000;
        position: relative;
        border-radius: 100px;
        justify-content: space-between;
        top: 0;
        left: 0;
        color: white;
    
        .tab-content{
            position: relative;
            border-radius: 6px;
            margin-top: 20px;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 3rem;
        }
    
        li{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 54px;
            width: 200px;
            font-size: 1.25rem;
            font-weight: 500;
            cursor: pointer;
            z-index: 2;
        }
    
        .indicator{
            position: absolute;
            display: flex;
            height: 54px;
            width: 200px;
            background-color: #7425CF;
            z-index: 1;
            border-radius: 99px;
            transition: 0.25s ease-out;
            box-shadow: 0px 10px 20px -3px #7425CF;
            transform: translateX(${(props) => props.activetab});
        }
    }
`;

export default TabComponent;
