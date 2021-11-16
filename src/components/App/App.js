import React from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Error from '../Error/Error';
import * as auth from '../../utils/auth';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';


function App() {

  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });
  const [loggedIn, setLoggedIn] = React.useState(false);


  React.useEffect(() => {
    if (loggedIn) {
      const userLocalStorage = localStorage.getItem('currentUser');


      if (!userLocalStorage) {
        auth
          .getUserInfo()
          .then((res) => {
            localStorage.setItem("currentUser", JSON.stringify(res));
            setCurrentUser(res);
          })
          .catch((err) =>
            console.log(err)
          );
      } else {
        setCurrentUser(JSON.parse(userLocalStorage));
      }}
    }, [loggedIn]);


  const handleTokenCheck = React.useCallback(() => {
    auth
      .getUserInfo()
      .then(() => {
        setLoggedIn(true);
      })
      .catch((err) => {
        setLoggedIn(false);
      });
  }, []);


  function handleEditProfile(email, name) {
    auth
      .setUserInfo(email, name)
      .then((res) => {
        localStorage.setItem('currentUser', JSON.stringify(res));
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  React.useEffect(() => {
    handleTokenCheck();
  }, [handleTokenCheck]);


  function handleRegister(data) {
    auth
      .register(data)
      .then((res) => {
        handleLogin(data);
      })
      .catch((err) => { 
        console.log(err) 
      })
  }

  function handleLogin(data) {
    auth
      .login(data)
      .then((res) => {
        handleTokenCheck();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleLogout() {
    auth
      .signOut()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({
          name: '',
          email: '',
        });
        localStorage.clear();
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn}/>
          </Route>
          <Route path="/signup">
            {loggedIn ? (
                  <Redirect to="/movies" />
                ) : (
              <Register onRegister={handleRegister} />
            )}
          </Route>
          <Route path='/signin'>
            {loggedIn ? (
                  <Redirect to="/movies" />
                ) : (
            <Login onLogin={handleLogin} />
            )}
          </Route>
          <Route path='/profile'>
            <Profile loggedIn={loggedIn} onEditProfile={handleEditProfile} onSignOut={handleLogout} />
          </Route>
          <Route path='/movies'>
            <Movies loggedIn={loggedIn} />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies loggedIn={loggedIn} />
          </Route>
          <Route path='/*'>
            <Error loggedIn={loggedIn} />
          </Route>
        </Switch>
      </CurrentUserContext.Provider> 
    </div>
  )
}

export default App;
