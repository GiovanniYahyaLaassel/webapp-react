import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {

    // Ottengo l'ID del film dalla URL
  const { id } = useParams(); 

  const movie = {
    id,
    title: 'Inception',
    description: 'Example',
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetail;