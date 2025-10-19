import { ASSAULT_LEGENDS } from '../events/UpgradeLegends/Assault/assaultData';
import { CONTROLLER_LEGENDS } from '../events/UpgradeLegends/Controller/controllerData';
import { RECON_LEGENDS } from '../events/UpgradeLegends/Recon/reconData';
import { SKIRM_LEGENDS } from '../events/UpgradeLegends/Skirmisher/skirmData';
import { SUPPORT_LEGENDS } from '../events/UpgradeLegends/Support/suppData';

// Combine legends with class
export const ALL_LEGENDS = [
    ...ASSAULT_LEGENDS.map(legend => ({ ...legend, class: 'Assault' })),
    ...CONTROLLER_LEGENDS.map(legend => ({ ...legend, class: 'Controller' })),
    ...RECON_LEGENDS.map(legend => ({ ...legend, class: 'Recon' })),
    ...SKIRM_LEGENDS.map(legend => ({ ...legend, class: 'Skirmisher' })),
    ...SUPPORT_LEGENDS.map(legend => ({ ...legend, class: 'Support' }))
];

// Search function
export const searchLegends = (query) => {
    if (!query || query.trim() === '') return ALL_LEGENDS;
    
    const lowerQuery = query.toLowerCase().trim();
    
    return ALL_LEGENDS.filter(legend => 
        legend.name.toLowerCase().includes(lowerQuery) ||
        legend.class.toLowerCase().includes(lowerQuery) ||
        legend.upgrades.some(upgrade => 
            upgrade.title.toLowerCase().includes(lowerQuery) ||
            upgrade.description.toLowerCase().includes(lowerQuery)
        )
    );
};