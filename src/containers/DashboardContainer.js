import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import {findUserPlaylist, getPlaylistTrack} from '../redux/actions/playlist';
import {getTracks, getUserPlayList} from "../redux/reducers/playlist";
import { isLogin } from "../redux/reducers/auth";
import { logOut } from "../redux/actions/auth";
import {loginAuth} from "../lib/auth";

const mapStateToProps = state => {
  return {
    playlist: getUserPlayList(state),
    tracks: getTracks(state),
    isLogin: isLogin(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    findUserPlaylist: () => {
      dispatch(findUserPlaylist());
    },
    getPlaylistTrack: (playlistId) => {
      dispatch(getPlaylistTrack(playlistId));
    },
    logout: () => {
      dispatch(logOut());
    },
    login: () => {
      loginAuth();
    },

  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Dashboard));
