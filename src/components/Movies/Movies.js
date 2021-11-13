import React from 'react';
//import './Movies.css';
import HeaderMovies from '../HeaderMovies/HeaderMovies';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';

function Movies(props) {
  const [search, setSearch] = React.useState(false)

  function handlerOpen() {
    setSearch(true)
  }
  
  function handleClose() {
    setSearch(false)
  }
 
  return (
    <main className="movies-container">
      <HeaderMovies />
      <SearchForm />
      <MoviesCardList />
      <Preloader />
      <Footer />
    </main>
  ) 
}

export default Movies;