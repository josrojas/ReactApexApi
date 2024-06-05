import wrapPromise from "./wrapPromise";

const fetchEventDetail = async (params) => {
    try {
        const response = await fetch(`https://api.mozambiquehe.re/maprotation?auth=${import.meta.env.VITE_APEX_API}&version=2${params?.length ? params : ''}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};

const fetchData = () => {
    return {
        eventDetail: wrapPromise(fetchEventDetail())
    };
};

export default fetchData;