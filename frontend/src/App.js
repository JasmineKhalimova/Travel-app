import React, {useState, useCallback} from 'react';
import{BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import Nav from './shared/components/Nav/Nav';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import './css/main.css';
import { AuthContext } from './shared/context/auth-context';


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = useCallback(() => {
    setLoggedIn(true)
  }, []);

  const logout = useCallback(() => {
    setLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <Nav />
        <main> {routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
