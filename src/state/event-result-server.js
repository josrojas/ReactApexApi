import { create } from "zustand";

//Store data in global state server
const useEventsResultsServer = create((set) => ({
    data: [],
    error: null,
    isLoading: false,

    fetchEvents: async () => {
        try {
            await set(() => ({ isLoading: true }));

            const response = await fetch(`https://api.mozambiquehe.re/servers?auth=${import.meta.env.VITE_APEX_API_KEY}`);
            const data = await response.json();

            await set(() => ({ data, isLoading: false }));

        } catch (error) {
            await set(() => ({ error }));
        }
    },
}));


export default useEventsResultsServer;