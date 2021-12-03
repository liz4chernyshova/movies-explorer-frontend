import React from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Error from '../Error/Error';
import mainApi from '../../utils/MainApi';
import * as auth from '../../utils/auth';
import * as moviesApi from '../../utils/MoviesApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';


function App() {

  const [loggedIn, setLoggedIn] = React.useState(JSON.parse(localStorage.getItem('loggedIn')));
  const [currentUser, setCurrentUser] = React.useState({name: '', email: ''});
  const [movies, setMovies] = React.useState([]);
  const [message, setMessage] = React.useState(null);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isActivePreloader, setIsActivePreloader] = React.useState(false);
  const [errorServer, setErrorServer] = React.useState(false);
  const [notFoundSavedMovies, setNotFoundSavedMovies] = React.useState(false);
  const [token, setToken] = React.useState('');
  const [loginServerResponse, setLoginServerResponse] = React.useState('');
  const [registerServerResponse, setRegisterLoginServerResponse] = React.useState('');
  const [updateUserServerResponse, setUpdateUserLoginServerResponse] = React.useState({message: '', success: false });
  const history = useHistory();


  React.useEffect(() => {
    if (loggedIn) {
      const moviesLocalStorage = localStorage.getItem('movies');

      if (!moviesLocalStorage) {
        moviesApi
          .getMovies()
          .then((res) => {
            localStorage.setItem('movies', JSON.stringify(res || []));
            setMovies(res || []);
            setNotFoundSavedMovies(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setMovies(JSON.parse(moviesLocalStorage));
        setNotFoundSavedMovies(true);
      }
    }
  }, [loggedIn]);


  const resetSearchForm = () => {
    setMessage(null);
  };


  function searchMovies(word) {
    const searchTerm = word.toLowerCase();

    const movieSearchResult = movies.filter((item) => {
      return item.nameRU.toLowerCase().includes(searchTerm);
    });
    if (movieSearchResult.length === 0) {
      setFoundMovies([]);
    } else {
      setFoundMovies(movieSearchResult);
      resetSearchForm();
    }
  }

  function handleMovieSave(movie) {
    mainApi.createMovie({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailer: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }, token)
      .then(savedMovie => {
        const newSavedMovies = [...savedMovies, savedMovie];
        localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
        setSavedMovies([...savedMovies, savedMovie]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSearchMovies(movies, word) {
    const findMovies = movies.filter((item) => {
      return item.nameRU.toLowerCase().includes(word);
    });
    return findMovies;
  }

  function searchMyMovies(word) {
    const movies = JSON.parse(localStorage.getItem('savedMovies'));
    const listFindMovies = handleSearchMovies(movies, word);

    if(listFindMovies.length !== 0) {
      setSavedMovies(listFindMovies);
      setNotFoundSavedMovies(false);
    } else {
      setSavedMovies([]);
      setNotFoundSavedMovies(true);
    }
  }

  function handleMovieDelete(id) {
    mainApi.deleteMovie(id, token)
      .then(data => {
        const newSavedMovies = savedMovies.filter((movie) => movie._id !== id);
        localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
        setSavedMovies(newSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(name, email) {
    setIsActivePreloader(true);

    mainApi.updateUserInfo(name, email, token)
      .then(data => {
        setIsActivePreloader(false);
        setUpdateUserLoginServerResponse({
          message: 'Данные успешно обновлены!',
          success: true
        });
        setCurrentUser({ name: name, email: email });
      })
      .catch(err => {
        setIsActivePreloader(false);
        console.log(err.message)
        setUpdateUserLoginServerResponse({
          message: err.message,
          success: false
        });
      });
  }

  function handleLogin(email, password) {
    setIsActivePreloader(true);

    auth.authorize(email, password)
      .then((res) => {
        tokenCheck();
      })
      .then(data => {
        setIsActivePreloader(false);
        if(data.token) {
          localStorage.setItem('loggedIn', 'true');
          setLoggedIn(JSON.parse(localStorage.getItem('loggedIn')));
          setToken(localStorage.getItem('jwt'));
          mainApi.getUserInfo(data.token)
            .then(data => {
              setCurrentUser({ name: data.name, email: data.email });
            })
            .catch((err) => {
              setLoggedIn(JSON.parse(localStorage.getItem(false)));
              console.log(err);
            });
        }
        history.push('/movies');
      })
      .catch(err => {
        setIsActivePreloader(false);
        setLoginServerResponse(err.message);
      });
  }


  function handleRegister(name, email, password) {
    setIsActivePreloader(true);
    auth.register(name, email, password)
      .then((res) => {
        tokenCheck();
      })
      .then(data => {
        setIsActivePreloader(false);
        handleLogin(email, password);
      })
      .catch(err => {
        setIsActivePreloader(false);
        setRegisterLoginServerResponse(err.message);
      });
  }

  function handleSignOut() {
    localStorage.setItem('loggedIn', 'false');
    setLoggedIn(JSON.parse(localStorage.getItem('loggedIn')));
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    setMovies([]);
    history.push('/');
  }

  function tokenCheck() {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        auth.getContent(jwt).then((res) => {
          if (res) {
            setCurrentUser({ name: res.name, email: res.email });
            setToken(localStorage.getItem('jwt'));
            localStorage.setItem('loggedIn', 'true');
            setLoggedIn(JSON.parse(localStorage.getItem('loggedIn')));
          }
        }).catch((err) => {
          setLoggedIn(JSON.parse(localStorage.getItem(false)));
          console.log(err);
        });
      }
    }
  }

  React.useEffect(() => {
    tokenCheck();
  }, []);

  React.useEffect(() => {
    if(loggedIn) {
      mainApi.getMyMovies(localStorage.getItem('jwt'))
        .then((data) => {
          setSavedMovies(data);
          localStorage.setItem('savedMovies', JSON.stringify(data));
        })
        .catch(err => {
          console.log(err);
          setErrorServer(true);
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('movies'));
    if(movies && movies !== 0) {
      setMovies(movies);
    } else {
      setMovies([]);
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser} >
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>
          <ProtectedRoute
            exact path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            movies={foundMovies}
            message={message}
            isActive={isActivePreloader}
            errorServer={errorServer}
            searchMovie={searchMovies}
            onMovieSave={handleMovieSave}
            onMovieDelete={handleMovieDelete}
          />
          <ProtectedRoute
            exact path="/saved-movies"
            component={SavedMovies}
            movies={savedMovies}
            loggedIn={loggedIn}
            onMovieDelete={handleMovieDelete}
            onSubmitSearchForm={searchMyMovies}
            notFoundSavedMovies={notFoundSavedMovies}
          />
          <ProtectedRoute
            exact path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onSignOut={handleSignOut}
            onUpdateUser={handleUpdateUser}
            serverResponse={updateUserServerResponse}
            isActive={isActivePreloader}
          />
          <Route path="/signup">
            {loggedIn ? (
                  <Redirect to='/movies' />
                ) : (
              <Register onRegister={handleRegister} serverResponse={registerServerResponse} isActive={isActivePreloader} />
            )}
          </Route>
          <Route path='/signin'>
            {loggedIn ? (
                  <Redirect to='/movies' />
                ) : (
            <Login onLogin={handleLogin} serverResponse={loginServerResponse} isActive={isActivePreloader} />
            )}
          </Route>
          <Route path="/*">
            <Error loggedIn={loggedIn}/>
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
