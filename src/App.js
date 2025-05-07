import './App.css';
import { useState } from 'react';
import FilterMovie from './Components/FilterMovie';
import ListMovie from './Components/ListMovie';
import MoviesData from './Data/MoviesData';
import NavbarMovie from './Components/NavbarMovie';
import AddMovie from './Components/AddMovie';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Movie from './Components/Movie';

function App() {
  const [movies, setMovies] = useState(MoviesData);

  const [titleSearch, setTitleSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(0);

  return (
    <div >
      <NavbarMovie />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/MovieList' element={
          <>
            
            <h1 style={{ textAlign: 'center' }}>My Playlist</h1>
            <AddMovie movies={movies} setMovies={setMovies} />
            <FilterMovie titleSearch={titleSearch} ratingSearch={ratingSearch} setTitleSearch={setTitleSearch} setRatingSearch={setRatingSearch} />
            <ListMovie movies={movies} titleSearch={titleSearch} ratingSearch={ratingSearch} />
          </>
        } />
        <Route path='/Movie/:id' element={<Movie movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
