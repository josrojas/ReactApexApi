import wrapPromise from "./wrapPromise";

const fetchEventDetail = async (version) => {
    try {
        const response = await fetch(`https://api.mozambiquehe.re/maprotation${version}?auth=${import.meta.env.VITE_APEX_API_KEY}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};

const fetchData = (version) => {
    return {
        eventDetail: wrapPromise(fetchEventDetail(version))
    };
};

export default fetchData;