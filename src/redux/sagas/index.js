import { all, put, select } from 'redux-saga/effects';
import {
    GET_PLAYLIST,
    GET_PLAYLIST_FAIL,
    GET_PLAYLIST_SUCCESS,
    GET_PLAYLIST_TRACK,
    GET_PLAYLIST_TRACK_FAIL,
    GET_PLAYLIST_TRACK_SUCCESS
} from '../actions/playlist';
import {
    getPlayListTracksApi,
    getUserPlayListApi,
} from '../../api';
import { getToken } from '../reducers/auth';
import { takeLatest } from '@redux-saga/core/effects';
import {APP_API_CALL_FAIL} from "../../config";



function* getUserPlaylistSaga() {
    try{
      const JWT = yield select(getToken);
      const result = yield getUserPlayListApi(JWT);
      yield put({type: GET_PLAYLIST_SUCCESS, list: result.items});
    } catch (e) {
      yield put({type: GET_PLAYLIST_FAIL});
      yield put({
        type: APP_API_CALL_FAIL,
        message: "Error when get Playlist",
        err: e.message
      });
    }
}

function* getPlaylistTracksSaga(action) {
    try{
      const JWT = yield select(getToken);
      const result = yield getPlayListTracksApi(JWT, action.playlistId);
      yield put({type: GET_PLAYLIST_TRACK_SUCCESS, list: result.items});
    } catch (e) {
      yield put({type: GET_PLAYLIST_TRACK_FAIL});
      yield put({
        type: APP_API_CALL_FAIL,
        message: "Error when get Playlist Tracks",
        err: e.message
      });
    }
}

export function* watchGetUserPlaylist() {
    yield takeLatest(GET_PLAYLIST, getUserPlaylistSaga);
}
export function* watchGetPlaylistTracks() {
    yield takeLatest(GET_PLAYLIST_TRACK, getPlaylistTracksSaga);
}

export default function* rootSaga() {
    yield all([
        watchGetUserPlaylist(),
        watchGetPlaylistTracks()
    ]);
}
