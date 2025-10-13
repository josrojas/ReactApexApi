import TabSystem from './tabSystem.jsx';
import BattleRoyale from '../Maps/BattleRoyale';
import Ranked from '../Maps/Ranked';
import Mixtape from '../Maps/Mixtape';

const MAP_TABS = [
    { id: 0, label: 'Battle Royale', component: BattleRoyale },
    { id: 1, label: 'Ranked', component: Ranked },
    { id: 2, label: 'Mixtape', component: Mixtape },
];

export function TabComponent() {
    return (
        <TabSystem 
            tabs={MAP_TABS} 
            indicatorColor="#7425cf" 
            tabWidth={200}
            marginTop="6rem"
        />
    );
}

export default TabComponent;