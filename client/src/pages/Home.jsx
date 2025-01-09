import React from 'react';
import { NavLink } from 'react-router-dom';

// Componente Home
const Home = () => {
  const films = [
    { id: 1, title: 'Inception' },
    { id: 2, title: 'Titanic' },
    { id: 3, title: 'Interstellar' },
  ];

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