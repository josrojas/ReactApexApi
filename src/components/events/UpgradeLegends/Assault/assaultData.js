/// Legends data

export const BALLISTIC_DATA = {
    name: 'BALLISTIC',
    characterImage: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/assault/ballistic.jpg',
    upgradeImage: '/assets/Ballistic.webp',
    upgrades: [
        {
            id: 1,
            zone: 'Zone1',
            title: 'EXTRA BULLETS',
            description: 'Doubles the number of Tac charges.',
            tooltipPosition: { top: -10, left: -460 }
        },
        {
            id: 2,
            zone: 'Zone2',
            title: 'KILLING TIME',
            description: 'Increases duration of Ult by 15s.',
            tooltipPosition: { top: -10, left: 100 }
        },
        {
            id: 3,
            zone: 'Zone3',
            title: 'LASTING BULLET',
            description: 'Smart Bullet duration is tripled.',
            tooltipPosition: { top: 100, left: -460 }
        },
        {
            id: 4,
            zone: 'Zone4',
            title: 'QUIET TIME',
            description: 'Overheat now also silences enemy for 6s.',
            tooltipPosition: { top: 100, left: 100 }
        }
    ]
};

export const BANGALORE_DATA = {
    name: 'BANGALORE',
    characterImage: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/assault/bangalore.jpg',
    upgradeImage: '/assets/Bangalore.webp',
    upgrades: [
        {
            id: 1,
            zone: 'Zone1',
            title: 'ELECTRIC SMOKE',
            description: 'Electrifies Tac dealing 100 damage to enemy Ults and destroys Tacs.',
            tooltipPosition: { top: -10, left: -460 }
        },
        {
            id: 2,
            zone: 'Zone2',
            title: 'COVER ME',
            description: 'Allies regenerate HP while inside Smoke. Auto-Ping enemies who trigger Passive.',
            tooltipPosition: { top: -10, left: 100 }
        },
        {
            id: 3,
            zone: 'Zone3',
            title: 'ECM PAYLOAD',
            description: 'Electrifies Ult dealing 10 more damage, destroys enemy deployables.',
            tooltipPosition: { top: 100, left: -460 }
        },
        {
            id: 4,
            zone: 'Zone4',
            title: 'MEDAL OF HONOR',
            description: 'Faster revives and passive triggers running towards knocked allies.',
            tooltipPosition: { top: 100, left: 100 }
        }
    ]
};

export const MAGGIE_DATA = {
    name: 'MAD MAGGIE',
    characterImage: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/assault/mad-maggie.jpg',
    upgradeImage: '/assets/Maggie.webp',
    upgrades: [
        {
            id: 1,
            zone: 'Zone1',
            title: 'WARLORD\'S BOON',
            description: 'Increases the bonus speed from 25% to 35%.',
            tooltipPosition: { top: -10, left: -460 }
        },
        {
            id: 2,
            zone: 'Zone2',
            title: 'DRILL SERGEANT',
            description: 'The drill lasts 50% longer.',
            tooltipPosition: { top: -10, left: 100 }
        },
        {
            id: 3,
            zone: 'Zone3',
            title: 'DRILLBIT',
            description: 'Drills travel through walls.',
            tooltipPosition: { top: 100, left: -460 }
        },
        {
            id: 4,
            zone: 'Zone4',
            title: 'BOUNCE HOUSE',
            description: 'Wrecking Ball bounces off walls 4 additional times.',
            tooltipPosition: { top: 100, left: 100 }
        }
    ]
};

export const REVENANT_DATA = {
    name: 'REVENANT',
    characterImage: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/skirmisher/revenant.jpg',
    upgradeImage: '/assets/Rev.webp',
    upgrades: [
        {
            id: 1,
            zone: 'Zone1',
            title: 'ASSASSIN\'S INSTINCT',
            description: 'Shadow Pounce range increased by 50%.',
            tooltipPosition: { top: -10, left: -460 }
        },
        {
            id: 2,
            zone: 'Zone2',
            title: 'SHADOW BOOST',
            description: 'Shadow Pounce recharges 50% faster.',
            tooltipPosition: { top: -10, left: 100 }
        },
        {
            id: 3,
            zone: 'Zone3',
            title: 'IMPENDING DOOM',
            description: 'Mark lasts twice as long.',
            tooltipPosition: { top: 100, left: -460 }
        },
        {
            id: 4,
            zone: 'Zone4',
            title: 'DEADLY APPROACH',
            description: 'Creates a field that suppresses and slows enemies for 5s.',
            tooltipPosition: { top: 100, left: 100 }
        }
    ]
};

export const FUSE_DATA = {
    name: 'FUSE',
    characterImage: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/assault/fuse.jpg',
    upgradeImage: '/assets/Fuse.webp',
    upgrades: [
        {
            id: 1,
            zone: 'Zone1',
            title: 'RING MASTER',
            description: 'Gain access to Ring Consoles.',
            tooltipPosition: { top: -10, left: -460 }
        },
        {
            id: 2,
            zone: 'Zone2',
            title: 'SCAR TISSUE',
            description: 'Take 20 damage and ignore slow effects from The Motherlode.',
            tooltipPosition: { top: -10, left: 100 }
        },
        {
            id: 3,
            zone: 'Zone3',
            title: 'KNUCLE HUSTLER',
            description: 'Short speed boost on successful Knuckle Cluster hit.',
            tooltipPosition: { top: 100, left: -460 }
        },
        {
            id: 4,
            zone: 'Zone4',
            title: 'WRECKLESS',
            description: 'Take 50% less explosive damage.',
            tooltipPosition: { top: 100, left: 100 }
        }
    ]
};


export const ASSAULT_LEGENDS = [
    BALLISTIC_DATA,
    FUSE_DATA,
    MAGGIE_DATA,
    REVENANT_DATA,
    BANGALORE_DATA
];