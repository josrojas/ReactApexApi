import TabSystem from './tabSystem';
import AssaultSlide from "../UpgradeLegends/Slider/Assault.slide";
import SkirmSlide from "../UpgradeLegends/Slider/Skirm.slide";
import ReconSlide from "../UpgradeLegends/Slider/Recon.slide";
import ControlSlide from "../UpgradeLegends/Slider/Control.slide";
import SuppSlide from "../UpgradeLegends/Slider/Supp.slide";


const LEGEND_TABS = [
    { id: 0, label: 'Assault', component: AssaultSlide },
    { id: 1, label: 'Skirmisher', component: SkirmSlide },
    { id: 2, label: 'Recon', component: ReconSlide },
    { id: 3, label: 'Controller', component: ControlSlide },
    { id: 4, label: 'Support', component: SuppSlide },
];

export function Tabs() {
    return (
        <TabSystem 
            tabs={LEGEND_TABS} 
            indicatorColor="#fe0000" 
            textColor="#fff"
            tabWidth={150}
            marginTop="2rem"
            footerContent={<h5>Data from ea.com/games/apex-legends</h5>}
        />
    );
}


export default Tabs;