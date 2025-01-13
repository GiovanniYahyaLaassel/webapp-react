import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    // Chiamata GET per  la lista dei film 
    axios.get('http://localhost:3000/movies')  
      .then(response => {
        // Salviamo la risposta nel nostro stato
        setFilms(response.data);
      })
      .catch(error => {
        console.error('Errore nel recupero dei film:', error);
      });
      //chiamata che avverà solo al primo render 
  }, []);   


  return (
    <div className="container my-4">

      <h1 className="text-center mb-4">Lista dei Film</h1>
      <div className="row g-4">
          {films.map((film) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={film.id}>
              <MovieCard
                image={film.image} 
                title={film.title} 
                link={`/movie/${film.id}`} 
              />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;