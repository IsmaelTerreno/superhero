import React, { Component } from 'react';
import {MAIN_APP_NAME} from "../config";
import PropTypes from "prop-types";
import Playlist from "./Playlist";

class Dashboard extends Component {
    componentDidMount() {
        const { findUserPlaylist , isLogin} = this.props;
        if(isLogin) {
            findUserPlaylist();
        }
    }

    render() {
        const { playlist, isLogin, logout, login } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <h1>
                        {MAIN_APP_NAME}.
                    </h1>
                    { isLogin && <button onClick={logout}>Logout</button>}
                    { !isLogin && <button onClick={login}>Login</button>}
                </header>
                {
                    isLogin &&
                    <Playlist playlist={playlist}/>
                }
            </div>
        );
    }
}


Dashboard.propTypes = {
    findUserPlaylist: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    playlist: PropTypes.array,
    isLogin: PropTypes.bool,
};
export default Dashboard;
