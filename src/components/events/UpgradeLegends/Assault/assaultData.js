/// Legends data

export const BALLISTIC_DATA = {
    name: 'BALLISTIC',
    characterImage: '/assets/BallisticP.webp',
    upgradeImage: '/assets/Ballistic.webp',
    upgrades: [
        {
            id: 1,
            zone: 'Zone1',
            title: 'EXTRA BULLETS',
            description: 'Gain 1 extra bullet for the Tactical.',
            tooltipPosition: { top: -10, left: -460 }
        },
        {
            id: 2,
            zone: 'Zone2',
            title: 'TRAP MODE',
            description: 'Tac lasts 15s and deals 35 dmg if and enemy walks into it.',
            tooltipPosition: { top: -10, left: 100 }
        },
        {
            id: 3,
            zone: 'Zone3',
            title: 'QUIET TIME',
            description: 'No longer overheat, will Silence and slow on hit for 6s.',
            tooltipPosition: { top: 100, left: -460 }
        },
        {
            id: 4,
            zone: 'Zone4',
            title: 'KILLING TIME',
            description: 'Increase ult duration by 15 sec.',
            tooltipPosition: { top: 100, left: 100 }
        }
    ]
};

export const BANGALORE_DATA = {
    name: 'BANGALORE',
    characterImage: '/assets/BangaloreP.webp',
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
            title: 'COVER ME!',
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
    characterImage: '/assets/MaggieP.webp',
    upgradeImage: '/assets/Maggie.webp',
    upgrades: [
        {
            id: 1,
            zone: 'Zone1',
            title: 'GUNRUNNING',
            description: 'Your passive move speed applies to SMGs and Pistols.',
            tooltipPosition: { top: -10, left: -460 }
        },
        {
            id: 2,
            zone: 'Zone2',
            title: 'FIRE BALL',
            description: 'Wrecking ball drops lines of magma, and Maggie takes 50% less fire damage.',
            tooltipPosition: { top: -10, left: 100 }
        },
        {
            id: 3,
            zone: 'Zone3',
            title: 'DRILLSLINGER',
            description: 'Gain a Riot Drill charge and reduce activation duration by 25%.',
            tooltipPosition: { top: 100, left: -460 }
        },
        {
            id: 4,
            zone: 'Zone4',
            title: 'BIG DRILL',
            description: 'Increase depth and width of Tac by 50%.',
            tooltipPosition: { top: 100, left: 100 }
        }
    ]
};

export const REVENANT_DATA = {
    name: 'REVENANT',
    characterImage: '/assets/RevP.webp',
    upgradeImage: '/assets/Rev.webp',
    upgrades: [
        {
            id: 1,
            zone: 'Zone1',
            title: 'EVERLASTING',
            description: 'Increase Ultimate time by 10s after a knock.',
            tooltipPosition: { top: -10, left: -460 }
        },
        {
            id: 2,
            zone: 'Zone2',
            title: 'TRY TO HIDE',
            description: 'Doubles the duration low health enemies are marked.',
            tooltipPosition: { top: -10, left: 100 }
        },
        {
            id: 3,
            zone: 'Zone3',
            title: 'SILENCE',
            description: 'Silence AOE when landing from a Shadow Pounce.',
            tooltipPosition: { top: 100, left: -460 }
        },
        {
            id: 4,
            zone: 'Zone4',
            title: 'NO ESCAPE',
            description: 'Tactical resets after marking an enemy.',
            tooltipPosition: { top: 100, left: 100 }
        }
    ]
};

export const FUSE_DATA = {
    name: 'FUSE',
    characterImage: '/assets/FuseP.webp',
    upgradeImage: '/assets/Fuse.webp',
    upgrades: [
        {
            id: 1,
            zone: 'Zone1',
            title: 'PYRO TECHNIQUES',
            description: 'Ultimate explosives create flames for 8 seconds after the bombs explode.',
            tooltipPosition: { top: -10, left: -460 }
        },
        {
            id: 2,
            zone: 'Zone2',
            title: 'REIGNITION',
            description: 'Dealing explosive damage to enemies recharges your ultimate (for every 3 damage dealt, reduces cooldown by 1s).',
            tooltipPosition: { top: -10, left: 100 }
        },
        {
            id: 3,
            zone: 'Zone3',
            title: 'BIG BANG',
            description: 'Tactical\'s explosions cover a 50% larger area.',
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