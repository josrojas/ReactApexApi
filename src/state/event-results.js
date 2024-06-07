import { create } from "zustand";

//Store global data API
const useEventsResults = create((set) => ({
    data: [],
    error: null,
    isLoading: false,

    fetchEvents: async () => {
        try {
            set(() => ({ isLoading: true }));

            const response = await fetch(`https://api.mozambiquehe.re/maprotation?auth=${import.meta.env.VITE_APEX_API}&version=2`);
            const data = await response.json();

            set(() => ({ data, isLoading: false }));

        } catch (error) {
            set(() => ({ error, isLoading: false }));
        }
    },
}));

export default useEventsResults;