import React from 'react';
//import './Movies.css';
import HeaderMovies from '../HeaderMovies/HeaderMovies';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import { searchShortMovies } from '../../utils/utils';

function SavedMovies({movies, loggedIn, onMovieDelete, onSubmitSearchForm, notFoundSavedMovies}) {
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
    <>
      <HeaderMovies loggedIn={loggedIn}/>
      <SearchForm onSubmit={onSubmitSearchForm} onHandleCheckbox={handleSwitchShortMovies}/>
      <SavedMoviesCardList movies={isShorted ? shortMovies : movies} saved={true} onMovieDelete={onMovieDelete} notFoundSavedMovies={notFoundShort ? notFoundShort : notFoundSavedMovies} />
      <Footer />
    </>
  ) 
}

export default SavedMovies;