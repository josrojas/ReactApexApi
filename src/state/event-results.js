import { create } from "zustand";

//Store data in global state Map
const useEventsResults = create((set) => ({
    data: [],
    error: null,
    isLoading: false,

    fetchEvents: async (params) => {
        try {
            await set(() => ({ isLoading: true }));

            const response = await fetch(`https://api.mozambiquehe.re/maprotation?auth=${import.meta.env.VITE_APEX_API_KEY}&version=2${params?.length ? params : ''}`);
            const data = await response.json();

            await set(() => ({ data, isLoading: false }));

        } catch (error) {
            await set(() => ({ error }));
        }
    },
}));


export default useEventsResults;