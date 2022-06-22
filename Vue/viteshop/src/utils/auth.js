import { TOKEN_TIME_VALUE, TOKEN_TIME } from "./constant";

export const setTokenTime = () => {
  localStorage.setItem(TOKEN_TIME, Date.now());
};

export const getTokenTime = () => {
  return localStorage.getItem(TOKEN_TIME);
};

export const diffTokenTime = () => {
  return Date.now() - getTokenTime() > TOKEN_TIME_VALUE;
};
