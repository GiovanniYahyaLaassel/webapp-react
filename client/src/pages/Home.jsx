
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


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
    <div>
      <h1>Lista dei Film</h1>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <NavLink to={`/movie/${film.id}`}>{film.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;