import styled from 'styled-components';

// Classes colors
const getClassColor = (className) => {
    switch(className) {
        case 'Assault': return '#fe0000';
        case 'Skirmisher': return '#00d4ff';
        case 'Recon': return '#00ff88';
        case 'Controller': return '#9d5eff';
        case 'Support': return '#ffd700';
        default: return '#7425cf';
    }
};

// Main container
export const Container = styled.div`
    width: 100%;
    padding: 2rem;
    background-color: #2d2d2d;
    min-height: 100vh;
`;

// Search header and controls
export const SearchHeader = styled.div`
    max-width: 1200px;
    margin: 0 auto 2rem;
`;

export const Title = styled.h1`
    color: white;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
`;

export const SearchControls = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
`;

export const SearchInputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    background: #1a1a1a;
    border-radius: 50px;
    padding: 0 1.5rem;
    border: 2px solid #444;
    transition: border-color 0.3s ease;

    &:focus-within {
        border-color: #7425cf;
    }
`;

export const SearchIcon = styled.span`
    font-size: 1.2rem;
    margin-right: 0.5rem;
`;

export const SearchInput = styled.input`
    flex: 1;
    background: transparent;
    border: none;
    padding: 1rem 0;
    color: white;
    font-size: 1rem;
    outline: none;

    &::placeholder {
        color: #888;
    }
`;

export const ClearButton = styled.button`
    background: transparent;
    border: none;
    color: #888;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease;

    &:hover {
        color: #fff;
    }
`;

// Filter
export const FilterButtons = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
`;

export const FilterButton = styled.button`
    background: ${props => props.$active ? '#7425cf' : '#1a1a1a'};
    color: white;
    border: 2px solid ${props => props.$active ? '#7425cf' : '#444'};
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    font-size: 0.9rem;

    &:hover {
        background: ${props => props.$active ? '#9d5eff' : '#333'};
        border-color: ${props => props.$active ? '#9d5eff' : '#666'};
    }
`;

// Results
export const ResultsInfo = styled.div`
    text-align: center;
    color: #aaa;
    font-size: 1rem;
`;

export const ResultCount = styled.p`
    margin: 0;
    color: #aaa;
`;

export const NoResults = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: #888;
    font-size: 1.1rem;
`;

export const ClearAllButton = styled.button`
    background: #fe0000;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.3s ease;

    &:hover {
        background: #e63946;
    }
`;

// Grid
export const ResultsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    max-width: 1400px;
    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 1rem;
    }
`;

// Card preview
export const LegendPreviewCard = styled.div`
    position: relative;
    background: #1a1a1a;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 2px solid transparent;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 32px rgba(116, 37, 207, 0.4);
        border-color: #7425cf;
    }
`;

export const ClassBadge = styled.span`
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background: ${props => getClassColor(props.$class)};
    color: white;
    padding: 0.4rem 0.8rem;
    border-radius: 15px;
    font-weight: bold;
    font-size: 0.7rem;
    z-index: 2;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
`;

export const LegendImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: top center;
    display: block;

    @media (max-width: 768px) {
        height: 250px;
    }
`;

export const LegendName = styled.h3`
    color: white;
    text-align: center;
    padding: 1rem;
    margin: 0;
    font-size: 1.3rem;
    font-weight: bold;
    text-transform: uppercase;
    background: linear-gradient(to bottom, #1a1a1a, #0f0f0f);
`;

export const ViewDetailsButton = styled.div`
    background: #7425cf;
    color: white;
    text-align: center;
    padding: 0.75rem;
    font-weight: 600;
    font-size: 0.9rem;
    transition: background 0.3s ease;

    ${LegendPreviewCard}:hover & {
        background: #9d5eff;
    }
`;

// Modal
export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 2rem;
    overflow-y: auto;
    animation: fadeIn 0.3s ease;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const ModalContent = styled.div`
    position: relative;
    background: #2d2d2d;
    border-radius: 16px;
    padding: 2rem;
    max-width: 1200px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
    animation: slideUp 0.3s ease;

    @keyframes slideUp {
        from {
            transform: translateY(50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        padding: 1rem;
        max-height: 95vh;
    }

    /* Scrollbar personalizado */
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: #1a1a1a;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: #7425cf;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #9d5eff;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #fe0000;
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(254, 0, 0, 0.4);

    &:hover {
        background: #e63946;
        transform: rotate(90deg);
    }
`;