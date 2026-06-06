import { useState } from "react";
import styled from "styled-components";

export function TabSystem({ 
    tabs, 
    indicatorColor = '#7425cf', 
    tabWidth = 200,
    marginTop = '2rem',
    footerContent = null
}) {
    const [activeTab, setActiveTab] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const ActiveComponent = tabs[activeTab].component;

    const handleTabClick = (id) => {
        setActiveTab(id);
        setMenuOpen(false);
    };

    return (
        <Container $marginTop={marginTop}>
            {/* Desktop tabs */}
            <TabList>
                {tabs.map((tab) => (
                    <TabItem
                        key={tab.id}
                        $width={tabWidth}
                        $indicatorColor={indicatorColor}
                        className={activeTab === tab.id ? 'active' : ''}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab.label}
                    </TabItem>
                ))}
                <Indicator 
                    $offset={activeTab * 100} 
                    $color={indicatorColor}
                    $width={tabWidth}
                />
            </TabList>

            {/* Mobile hamburger */}
            <MobileNav onClick={() => setMenuOpen(o => !o)}>
                <ActiveLabel>{tabs[activeTab].label}</ActiveLabel>
                <HamburgerBtn>
                    {menuOpen ? '✕' : '☰'}
                </HamburgerBtn>
                {menuOpen && (
                    <Dropdown onClick={e => e.stopPropagation()}>
                        {tabs.map((tab) => (
                            <DropdownItem
                                key={tab.id}
                                $indicatorColor={indicatorColor}
                                $active={activeTab === tab.id}
                                onClick={() => handleTabClick(tab.id)}
                            >
                                {tab.label}
                            </DropdownItem>
                        ))}
                    </Dropdown>
                )}
            </MobileNav>

            <TabContent>
                <ActiveComponent />
            </TabContent>
            {footerContent && <FooterWrapper>{footerContent}</FooterWrapper>}
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: ${props => props.$marginTop};
    width: 100%;
    min-height: 30vh;
    background-color: #2d2d2d;
    padding: 2rem 0;
    color: #fff;
`;

const TabList = styled.ul`
    list-style: none;
    display: flex;
    box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.1);
    background-color: #000;
    position: relative;
    border-radius: 100px;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    color: white;

    @media (max-width: 768px) {
        display: none;
    }
`;

const TabItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 54px;
    width: ${props => props.$width}px;
    font-size: 1.25rem;
    font-weight: 500;
    cursor: pointer;
    z-index: 2;
    transition: color 0.25s ease;
    user-select: none;

    &.active { color: white; }
    &:not(.active) { color: #fff; }
    &:hover { color: ${props => props.$indicatorColor}; }
`;

const Indicator = styled.span`
    position: absolute;
    height: 54px;
    width: ${props => props.$width}px;
    background-color: ${props => props.$color};
    z-index: 1;
    border-radius: 99px;
    transition: transform 0.25s ease-out;
    box-shadow: 0px 10px 20px -3px ${props => props.$color};
    transform: translateX(${props => props.$offset}%);
`;

const MobileNav = styled.div`
    display: none;
    position: relative;
    width: 90%;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #000;
        border-radius: 100px;
        padding: 0 20px;
        height: 54px;
    }
`;

const ActiveLabel = styled.span`
    font-size: 1.1rem;
    font-weight: 500;
    color: #fff;
`;

const HamburgerBtn = styled.button`
    background: none;
    border: none;
    color: #fff;
    font-size: 1.4rem;
    cursor: pointer;
    padding: 0;
    line-height: 1;
`;

const Dropdown = styled.ul`
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #111;
    border-radius: 16px;
    list-style: none;
    padding: 8px 0;
    margin: 0;
    z-index: 100;
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
`;

const DropdownItem = styled.li`
    padding: 14px 24px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    color: ${props => props.$active ? props.$indicatorColor : '#fff'};
    background-color: ${props => props.$active ? 'rgba(255,255,255,0.05)' : 'transparent'};
    transition: background 0.2s;

    &:hover {
        background-color: rgba(255,255,255,0.08);
    }

    &:first-child { border-radius: 16px 16px 0 0; }
    &:last-child { border-radius: 0 0 16px 16px; }
`;

const TabContent = styled.div`
    position: relative;
    border-radius: 6px;
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FooterWrapper = styled.div`
    margin-top: 2rem;
    width: 100%;
    text-align: center;
    
    h5 {
        color: #fff;
        font-weight: 400;
        font-size: 0.9rem;
        margin: 0;
    }
`;

export default TabSystem;