

export const getApiKey = () => {
    return localStorage.getItem("apikey");
};

export const setApiKey = (key) => {
    localStorage.setItem("apikey", key);
};

