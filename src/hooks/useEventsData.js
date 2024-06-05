/*import { useState } from 'react';

//Hook to call API and save local state
const useEventsData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const fetchEvents = async (params) => {
        try {
            const response = await fetch(`https://api.mozambiquehe.re/maprotation?auth=${import.meta.env.VITE_APEX_API}&version=2${params?.length ? params : ''}`);
            const data = await response.json();

            setData(data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
        }
    };

    return {
        //events: data?._embedded?.events || [],
        page: data?.page || {},
        isLoading,
        error,
        fetchEvents,
    };
};

export default useEventsData;*/