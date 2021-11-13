import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Error from '../Error/Error';
import { Switch, Route } from 'react-router-dom';


function App() {

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header />
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
          <Footer />
        </Route>
        <Route path="/signup">
            <Register />
          </Route>
          <Route path='/signin'>
            <Login  />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/movies'>
            <Movies />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies />
          </Route>
          <Route path='/*'>
            <Error />
          </Route>
      </Switch>
    </div>
  )
}

export default App;
