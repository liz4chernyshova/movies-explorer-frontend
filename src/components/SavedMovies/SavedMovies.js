import React from 'react';
//import './Movies.css';
import HeaderMovies from '../HeaderMovies/HeaderMovies';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies(props) {
 
  return (
    <main className="movies-container">
      <HeaderMovies />
      <SearchForm />
      <SavedMoviesCardList />
      <Footer />
    </main>
  ) 
}

export default SavedMovies;