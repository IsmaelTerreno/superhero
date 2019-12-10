
export const GET_PLAYLIST = "GET_PLAYLIST";
export const GET_PLAYLIST_SUCCESS = "GET_PLAYLIST_SUCCESS";
export const GET_PLAYLIST_FAIL = "GET_PLAYLIST_FAIL";


export const findUserPlaylist = () => {
  return {
    type: GET_PLAYLIST
  };
};

