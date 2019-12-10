
export const GET_PLAYLIST = "GET_PLAYLIST";
export const GET_PLAYLIST_SUCCESS = "GET_PLAYLIST_SUCCESS";
export const GET_PLAYLIST_FAIL = "GET_PLAYLIST_FAIL";
export const GET_PLAYLIST_TRACK = "GET_PLAYLIST_TRACK";
export const GET_PLAYLIST_TRACK_SUCCESS = "GET_PLAYLIST_TRACK_SUCCESS";
export const GET_PLAYLIST_TRACK_FAIL = "GET_PLAYLIST_TRACK_FAIL";

export const findUserPlaylist = () => {
  return {
    type: GET_PLAYLIST
  };
};

export const getPlaylistTrack = (playlistId) => {
  return {
    type: GET_PLAYLIST_TRACK,
    playlistId
  };
};

