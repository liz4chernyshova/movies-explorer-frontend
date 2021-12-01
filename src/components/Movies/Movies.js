import React from 'react';
import HeaderMovies from '../HeaderMovies/HeaderMovies';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import { searchShortMovies } from '../../utils/utils';

function Movies({ movies, loggedIn, searchMovie, message, isActive, errorServer, notFoundMovies, onMovieSave, onMovieDelete }) {
  const [shortMovies, setShortMovies] = React.useState([]);
  const [isShorted, setIsShorted] = React.useState(false);
  const [notFoundShort, setNotFoundShort] = React.useState(false);

  function handleSwitchShortMovies() {
    setIsShorted(!isShorted);
  }

  React.useEffect(() => {
    if (isShorted) {
      const listShortMovies = searchShortMovies(movies);
      if (listShortMovies.length !== 0) {
        setShortMovies(listShortMovies);
        setNotFoundShort(false);
      } else {
        setShortMovies([]);
        setNotFoundShort(true);
      }
    } else {
      !isShorted && setNotFoundShort(false);
    }
  }, [movies, isShorted]);

  return (
    <main className="movies-container">
      <HeaderMovies loggedIn={loggedIn} />
      <SearchForm searchMovie={searchMovie} onHandleCheckbox={handleSwitchShortMovies} />
      <Preloader isActive={isActive} />
      {!isActive && 
        (<MoviesCardList  movies={isShorted ? shortMovies : movies}
          message={message}
          saved={false} 
          errorServer={errorServer}
          onMovieSave={onMovieSave} 
          onMovieDelete={onMovieDelete} 
          notFoundMovies={notFoundShort ? notFoundShort : notFoundMovies} 
      />)}
      <Footer />
    </main>
  ) 
}

export default Movies;