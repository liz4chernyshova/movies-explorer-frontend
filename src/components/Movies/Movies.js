import React from 'react';
//import './Movies.css';
import HeaderMovies from '../HeaderMovies/HeaderMovies';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';

function Movies({loggedIn}) {
 
  return (
    <main className="movies-container">
      <HeaderMovies loggedIn={loggedIn}/>
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </main>
  ) 
}

export default Movies;