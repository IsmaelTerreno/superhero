import {AUTH_CONFIG} from "../config";

export const JWT_LOCAL_STORAGE = 'token';
export const EXPIRES_IN_LOCAL_STORAGE = 'expiresIn';
export const IS_LOGGED_IN_LOCAL_STORAGE = 'isLoggedIn';
export const IS_LOGGED_IN_LOCAL_STORAGE_TRUE = 'true';


export const isNotExpired = (expiresIn) => {
  let expiresAt = (expiresIn * 1000) + new Date().getTime();
  return new Date().getTime() < expiresAt;
};

export const saveJWTInfoToLocalStorage= (accessToken, expiresIn, isLogin) =>{
  // Set accessToken in localStorage
  localStorage.setItem(JWT_LOCAL_STORAGE, accessToken);
  localStorage.setItem(EXPIRES_IN_LOCAL_STORAGE, expiresIn);
  localStorage.setItem(IS_LOGGED_IN_LOCAL_STORAGE, isLogin);
};

export const isValidSession = () => {
    let isValidSession = true;
    const token = localStorage.getItem( JWT_LOCAL_STORAGE );
    // if There is no access token present in local storage, meaning that you are not logged in.
    // or There is an expired access token in local storage.
    if (!token || !isNotExpired(localStorage.getItem(EXPIRES_IN_LOCAL_STORAGE))) {
        isValidSession = false;
    }
    return isValidSession;
};

const generateRandomString = (length) => {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const loginAuth = () =>{
  const state = generateRandomString(16);
  let url = `${AUTH_CONFIG.domain}/authorize`;
  url += '?response_type=token';
  url += '&client_id=' + encodeURIComponent(AUTH_CONFIG.clientId);
  url += '&scope=' + encodeURIComponent(AUTH_CONFIG.scope);
  url += '&redirect_uri=' + encodeURIComponent(AUTH_CONFIG.callbackUrl);
  url += '&state=' + encodeURIComponent(state);
  window.location = url;
};

export const logOutAuth = () => {
    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem(JWT_LOCAL_STORAGE);
    localStorage.removeItem(EXPIRES_IN_LOCAL_STORAGE);
    localStorage.removeItem(IS_LOGGED_IN_LOCAL_STORAGE);
};

export const getTokenSession = () => {
    return localStorage.getItem(JWT_LOCAL_STORAGE);
};


