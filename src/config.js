export const MAIN_APP_NAME = "Superhero Music";
const USER_READ_PRIVATE_SCOPE = 'user-read-private';
const USER_READ_EMAIL_SCOPE = 'user-read-email';
const PLAYLIST_READ_PRIVATE_SCOPE = 'playlist-read-private';
export const EMPTY_JWT_ERROR_MESSAGE='There is no JWT access token to make calls to the APIs';
export const STATUS_401_ERROR_MESSAGE='Calls to the API return 401 Unauthorized';
export const STATUS_400_ERROR_MESSAGE='Calls to the API return 400 Bad Request';
export const STATUS_403_ERROR_MESSAGE='Calls to the API return 403 Forbidden';
export const STATUS_500_ERROR_MESSAGE='Calls to the API return 500 Internal Server Error';
export const STATUS_504_ERROR_MESSAGE='Calls to the API return 504 Gateway Timeout';
export const AUTH_CONFIG = {
  domain: process.env.REACT_APP_DOMAIN_AUTH_HOST_CONFIG,
  clientId: process.env.REACT_APP_CLIENT_ID_AUTH_CONFIG,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET_AUTH_CONFIG,
  callbackUrl: process.env.REACT_APP_CALL_BACK_URL_AUTH_CONFIG,
  scope: `${USER_READ_PRIVATE_SCOPE} ${USER_READ_EMAIL_SCOPE} ${PLAYLIST_READ_PRIVATE_SCOPE}`
};
export const MOCK_ALL_DATA= (process.env.REACT_APP_MOCK_ALL_DATA === 'true');
export const BASE_END_POINT = process.env.REACT_APP_BASE_END_POINT_CONFIG ;
export const USER_PLAYLIST_END_POINT = '/me/playlists' ;
export const APP_PATH_ROOT = "/";
export const APP_PATH_LOGIN = "/sign-in";
export const APP_PATH_AUTH0_CALLBACK = "/callback";
export const APP_API_CALL_FAIL = "APP_API_CALL_FAIL";



