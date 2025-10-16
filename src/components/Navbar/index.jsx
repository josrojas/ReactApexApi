import { useState, useMemo } from 'react';
import { ALL_LEGENDS, searchLegends } from './legendsDataSearch.jsx';
import LegendCard from '../events/UpgradeLegends/legendCard.jsx';
import * as S from './searchStyles.js';

const LegendSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedClass, setSelectedClass] = useState('All');
    const [selectedLegend, setSelectedLegend] = useState(null);

    // Filtrar por búsqueda y clase
    const filteredLegends = useMemo(() => {
        let results = searchLegends(searchQuery);
        
        if (selectedClass !== 'All') {
            results = results.filter(legend => legend.class === selectedClass);
        }
        
        return results;
    }, [searchQuery, selectedClass]);

    const handleClearSearch = () => {
        setSearchQuery('');
        setSelectedClass('All');
    };

    const openModal = (legend) => {
        setSelectedLegend(legend);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedLegend(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <S.Container>
            <S.SearchHeader>                
                <S.SearchControls>
                    <S.SearchInputWrapper>
                        <S.SearchIcon>🔍</S.SearchIcon>
                        <S.SearchInput
                            type="text"
                            placeholder="Search by legend name, class, or upgrade..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <S.ClearButton onClick={() => setSearchQuery('')}>
                                ✕
                            </S.ClearButton>
                        )}
                    </S.SearchInputWrapper>

                    <S.FilterButtons>
                        <S.FilterButton 
                            $active={selectedClass === 'All'}
                            onClick={() => setSelectedClass('All')}
                        >
                            All
                        </S.FilterButton>
                        <S.FilterButton 
                            $active={selectedClass === 'Assault'}
                            onClick={() => setSelectedClass('Assault')}
                        >
                            Assault
                        </S.FilterButton>
                        <S.FilterButton 
                            $active={selectedClass === 'Skirmisher'}
                            onClick={() => setSelectedClass('Skirmisher')}
                        >
                            Skirmisher
                        </S.FilterButton>
                        <S.FilterButton 
                            $active={selectedClass === 'Recon'}
                            onClick={() => setSelectedClass('Recon')}
                        >
                            Recon
                        </S.FilterButton>
                        <S.FilterButton 
                            $active={selectedClass === 'Controller'}
                            onClick={() => setSelectedClass('Controller')}
                        >
                            Controller
                        </S.FilterButton>
                        <S.FilterButton 
                            $active={selectedClass === 'Support'}
                            onClick={() => setSelectedClass('Support')}
                        >
                            Support
                        </S.FilterButton>
                    </S.FilterButtons>
                </S.SearchControls>

                <S.ResultsInfo>
                    {filteredLegends.length === 0 ? (
                        <S.NoResults>
                            No legends found matching "{searchQuery}"
                            <S.ClearAllButton onClick={handleClearSearch}>
                                Clear filters
                            </S.ClearAllButton>
                        </S.NoResults>
                    ) : (
                        <S.ResultCount>
                            Found {filteredLegends.length} legend{filteredLegends.length !== 1 ? 's' : ''}
                            {searchQuery && ` matching "${searchQuery}"`}
                            {selectedClass !== 'All' && ` in ${selectedClass}`}
                        </S.ResultCount>
                    )}
                </S.ResultsInfo>
            </S.SearchHeader>

            <S.ResultsGrid>
                {filteredLegends.map((legend) => (
                    <S.LegendPreviewCard 
                        key={legend.name}
                        onClick={() => openModal(legend)}
                    >
                        <S.ClassBadge $class={legend.class}>{legend.class}</S.ClassBadge>
                        <S.LegendImage 
                            src={legend.characterImage} 
                            alt={legend.name}
                        />
                        <S.LegendName>{legend.name}</S.LegendName>
                        <S.ViewDetailsButton>View Upgrades</S.ViewDetailsButton>
                    </S.LegendPreviewCard>
                ))}
            </S.ResultsGrid>

            {/* Modal */}
            {selectedLegend && (
                <S.ModalOverlay onClick={closeModal}>
                    <S.ModalContent onClick={(e) => e.stopPropagation()}>
                        <S.CloseButton onClick={closeModal}>✕</S.CloseButton>
                        <LegendCard legendData={selectedLegend} />
                    </S.ModalContent>
                </S.ModalOverlay>
            )}
        </S.Container>
    );
};

export default LegendSearch;