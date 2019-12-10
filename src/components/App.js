import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Provider from 'react-redux/es/components/Provider';
import configureStore from '../redux/store/configureStore';
import Routes from "../Routes";

const store = configureStore();
const browserHistory = createBrowserHistory();


const App = () => {
  return (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Routes />
        </Router>
    </Provider>
  );
};

export default App;
