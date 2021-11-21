import React from 'react';
//import './Movies.css';
import HeaderMovies from '../HeaderMovies/HeaderMovies';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({loggedIn}) {
 
  return (
    <>
      <HeaderMovies loggedIn={loggedIn}/>
      <SearchForm />
      <SavedMoviesCardList />
      <Footer />
    </>
  ) 
}

export default SavedMovies;