import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
  // Ottengo l'ID del film dalla URL
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Chiamata GET per ottenere il dettaglio del film e le recensioni
    axios.get(`http://localhost:3000/movies/${id}`)
      .then(response => {
        setMovie(response.data.movie);
        setReviews(response.data.reviews); 
      })
      .catch(error => {
        console.error('Errore nel recupero del dettaglio del film:', error);
      });
  }, [id]);

  if (!movie) {
    return <p>Caricamento...</p>; 
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p><strong>Direttore:</strong> {movie.director}</p>
      <p><strong>Anno:</strong> {movie.release_year}</p>

      <h2>Recensioni</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <strong>{review.name}</strong>: {review.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetail;