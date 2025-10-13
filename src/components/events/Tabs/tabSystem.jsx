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
    const ActiveComponent = tabs[activeTab].component;

    return (
        <Container $marginTop={marginTop}>
            <TabList>
                {tabs.map((tab) => (
                    <TabItem
                        key={tab.id}
                        $width={tabWidth}
                        $indicatorColor={indicatorColor}
                        className={activeTab === tab.id ? 'active' : ''}
                        onClick={() => setActiveTab(tab.id)}
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

    &.active {
        color: white;
    }

    &:not(.active) {
        color: #fff;
    }

    &:hover {
        color: ${props => props.$indicatorColor};
    }
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