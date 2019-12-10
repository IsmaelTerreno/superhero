import {
  BASE_END_POINT,
  EMPTY_JWT_ERROR_MESSAGE,
  USER_PLAYLIST_END_POINT,
  MOCK_ALL_DATA,
  STATUS_400_ERROR_MESSAGE,
  STATUS_401_ERROR_MESSAGE,
  STATUS_403_ERROR_MESSAGE,
  STATUS_500_ERROR_MESSAGE,
  STATUS_504_ERROR_MESSAGE
} from './config';
import {isValidSession} from './lib/auth';

const METHOD_GET = 'get';

const validateEmptyJWT = (jwt) => {
  if (!jwt) { throw new Error(EMPTY_JWT_ERROR_MESSAGE); }
};

const playlistsMockData = {
  "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q/playlists?offset=0&limit=20",
  "items": [
    {
      "collaborative": false,
      "description": "",
      "external_urls": {
        "spotify": "https://open.spotify.com/playlist/2ODMG6xNVCmVqhJc4my51W"
      },
      "href": "https://api.spotify.com/v1/playlists/2ODMG6xNVCmVqhJc4my51W",
      "id": "2ODMG6xNVCmVqhJc4my51W",
      "images": [
        {
          "height": 640,
          "url": "https://mosaic.scdn.co/640/7c359f03822255902f2b8a29a41c3a606fa57846ab67616d0000b27354ccfd097ec3c9335d030cdcab67616d0000b2737f401862bfe87b552a75308dab67616d0000b273edd0b8fdbf7fa74d320cadd8",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://mosaic.scdn.co/300/7c359f03822255902f2b8a29a41c3a606fa57846ab67616d0000b27354ccfd097ec3c9335d030cdcab67616d0000b2737f401862bfe87b552a75308dab67616d0000b273edd0b8fdbf7fa74d320cadd8",
          "width": 300
        },
        {
          "height": 60,
          "url": "https://mosaic.scdn.co/60/7c359f03822255902f2b8a29a41c3a606fa57846ab67616d0000b27354ccfd097ec3c9335d030cdcab67616d0000b2737f401862bfe87b552a75308dab67616d0000b273edd0b8fdbf7fa74d320cadd8",
          "width": 60
        }
      ],
      "name": "Bunker",
      "owner": {
        "display_name": "Ismael Terreno",
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "primary_color": null,
      "public": true,
      "snapshot_id": "MjMsZmI3M2M2N2U5ZjUxZGExNmZjYTQ3ODg5MDIwNDMzOGRjZGM5N2VmOQ==",
      "tracks": {
        "href": "https://api.spotify.com/v1/playlists/2ODMG6xNVCmVqhJc4my51W/tracks",
        "total": 21
      },
      "type": "playlist",
      "uri": "spotify:playlist:2ODMG6xNVCmVqhJc4my51W"
    }
  ],
  "limit": 20,
  "next": null,
  "offset": 0,
  "previous": null,
  "total": 1
};

const buildRequestMetaData = (method, ACCESS_TOKEN_JWT, body) =>{
   return {
     method: method,
     headers: new Headers({
         'Authorization': 'Bearer ' + ACCESS_TOKEN_JWT,
         'Accept': 'application/json',
         'Content-Type': 'application/json',
     })
   };
};

const buildRequestData = (method, JWT, body) => {
    validateEmptyJWT(JWT);
    return buildRequestMetaData(method, JWT, body);
};

const handleStatus = (response) => {
    const apiMessage = (response) => {
      return " -- API message : " + response.message;
    };
    if(response && response.status === 401){
     throw new Error(STATUS_401_ERROR_MESSAGE + apiMessage(response));
    }
    if(response && response.status === 400){
     throw new Error(STATUS_400_ERROR_MESSAGE + apiMessage(response));
    }
    if(response && response.status === 403){
       throw new Error(STATUS_403_ERROR_MESSAGE + apiMessage(response));
    }
    if(response && response.status === 500){
     throw new Error(STATUS_500_ERROR_MESSAGE + apiMessage(response));
    }
    if(response && response.status === 504){
     throw new Error(STATUS_504_ERROR_MESSAGE + apiMessage(response));
    }
};

const consumeApi = async (endPoint, method, JWT, mockData, mockOverride, body) =>{
  let response = null;
  let json = null;
  if ( MOCK_ALL_DATA || mockOverride){
    console.log(`MOCK_ALL_DATA active for method ${method.toUpperCase()} in endpoint: ${endPoint}`);
    json = mockData;
  } else {
    if(isValidSession()){
      try{
        // Only call to api if we we have a valid session.
        response = await fetch(endPoint, buildRequestData(method, JWT, body));
        handleStatus(response);
        json = await response.json();
      } catch (e) {
        console.log(e);
      }
    } else {
      // Invalid session so it will try to renew the token.
      // renewToken();
    }
  }
  return json;
};

export const getUserPlayListApi = async (JWT) => {
    const END_POINT = BASE_END_POINT + USER_PLAYLIST_END_POINT ;
    return consumeApi(END_POINT, METHOD_GET, JWT, playlistsMockData, false, {}, false);
};

