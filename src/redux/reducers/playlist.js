import {
  GET_PLAYLIST_SUCCESS, GET_PLAYLIST_TRACK_SUCCESS
} from '../actions/playlist';
import { createSelector } from 'reselect';

const initState = {
  current: null,
  list:[],
  tracks:[],
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_PLAYLIST_SUCCESS:
      return {
          ...state,
        list: action.list
      };
    case GET_PLAYLIST_TRACK_SUCCESS:
      return {
          ...state,
        tracks: action.list
      };
    default:
      return state;
  }
}

const tracksSelector = state => state.playlist.tracks;
const userPlayListSelector = state => state.playlist.list;

export const getTracks = createSelector(
    tracksSelector,
    tracksList => tracksList
);

export const getUserPlayList = createSelector(
  userPlayListSelector,
    userPlayList => userPlayList
);
