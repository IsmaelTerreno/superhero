import React, { Component } from 'react';
import {MAIN_APP_NAME} from "../config";
import PropTypes from "prop-types";
import Playlist from "./Playlist";
import './Dashboard.scss';
import Tracks from "./Tracks";

class Dashboard extends Component {
    componentDidMount() {
        const { findUserPlaylist , isLogin} = this.props;
        if(isLogin) {
            findUserPlaylist();
        }
    }

    render() {
        const { playlist, isLogin, logout, login, getPlaylistTrack, tracks } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <h1>
                        {MAIN_APP_NAME}.
                    </h1>
                    { isLogin && <button onClick={logout}>Logout</button>}
                    { !isLogin && <button onClick={login}>Login</button>}
                </header> {
                    isLogin &&
                    <section className="LayoutPlayList">
                        <aside>
                            {
                                isLogin &&
                                <Playlist
                                    playlist={playlist}
                                    onClickItem={(item) => {
                                        getPlaylistTrack(item.id);
                                    }}
                                />
                            }
                        </aside>
                        <section>
                            <Tracks tracks={tracks} />
                        </section>
                    </section>
                }
            </div>
        );
    }
}


Dashboard.propTypes = {
    findUserPlaylist: PropTypes.func.isRequired,
    getPlaylistTrack: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    playlist: PropTypes.array,
    tracks: PropTypes.array,
    isLogin: PropTypes.bool,
};
export default Dashboard;
