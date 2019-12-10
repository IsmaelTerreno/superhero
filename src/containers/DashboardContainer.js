import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import { findUserPlaylist } from '../redux/actions/playlist';
import { getUserPlayList } from "../redux/reducers/playlist";
import { isLogin } from "../redux/reducers/auth";
import { logOut } from "../redux/actions/auth";
import {loginAuth} from "../lib/auth";

const mapStateToProps = state => {
  return {
    playlist: getUserPlayList(state),
    isLogin: isLogin(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    findUserPlaylist: () => {
      dispatch(findUserPlaylist());
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
