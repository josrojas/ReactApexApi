import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

const Events = ({ searchTerm, events }) => {

    //Filter events - searchBar
    const renderEvents = () => {
        let eventsFiltered = events;

        if (searchTerm.length > 0) {
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }
    }; 

    return (
        <div>
            {renderEvents()}
        </div>
    );
};

export default memo(Events);