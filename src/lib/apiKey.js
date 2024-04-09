/* eslint-disable no-undef */
export const getApiKey = () => {
  return globalThis.localStorage.getItem("apikey");
};

export const setApiKey = (key) => {
  globalThis.localStorage.setItem("apikey", key);
};
