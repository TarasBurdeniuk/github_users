import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import store from './store/store';
import { getAllUsers } from './actions/users';
import MainPage from './components/MainPage/MainPage';
import UserPage from './components/UserPage/UserPage';

/**
 * Root component
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  useEffect(() => {
    store.dispatch(getAllUsers());
  });

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/:user' component={UserPage} />
      </Switch>
    </Router>
  );
}

export default App;
