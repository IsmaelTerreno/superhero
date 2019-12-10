import {
  GET_PLAYLIST_SUCCESS
} from '../actions/playlist';
import { createSelector } from 'reselect';

const initState = {
  current: null,
  list:[],
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_PLAYLIST_SUCCESS:
      return {
          ...state,
        list: action.list
      };
    default:
      return state;
  }
}

const currentPlayListSelector = state => state.playlist.current;
const userPlayListSelector = state => state.playlist.list;

export const getCurrentPlaylist = createSelector(
  currentPlayListSelector,
    currentPlayList => currentPlayList
);

export const getUserPlayList = createSelector(
  userPlayListSelector,
    userPlayList => userPlayList
);
