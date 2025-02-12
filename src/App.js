import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movie from './pages/movls';
import Moviedet from './pages/moviedet';
import Navbar from './components/navbar';
import Login from './pages/login';
import Register from './pages/regeister';
import Favorites from './pages/faviourts';
import MoviePages from './pages/MoviePages';
import SearchResults from './pages/searchres';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <div className='d-flex contaner-fluid flex-wrap justify-content-center'>
          <Routes>
            <Route path="/" element={<Movie/>}/>
            <Route path="/movies/page/:page" element={<MoviePages/>}/>
            <Route path="/movies/search/:page" element={<SearchResults/>}/>
            <Route path="/moviedet/:id" element={<Moviedet/>}/>
            <Route path="/Favorites" element={<Favorites/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
