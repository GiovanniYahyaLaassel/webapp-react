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
    <>
  <section>
    <div className="container my-4">
        
        <div className="d-flex flex-md-row align-items-center align-items-md-start gap-4">

          <img
            src={movie.image}
            alt={movie.title}
            className="img-fluid rounded"
            style={{ maxWidth: '200px' }}
          />

          {/* Dettagli del film */}
          <div>
            <h1>{movie.title}</h1>
            <p>
              <strong>Direttore:</strong> {movie.director}
            </p>
            <p>
              <strong>Anno:</strong> {movie.release_year}
            </p>
            <p>{movie.description}</p>
          </div>
        </div>
    </div>
  </section>

  <section>
    <div className="container mt-5">
      <h2 className="mb-4">Recensioni</h2>
      <div className="d-flex flex-column gap-3">
        {reviews.map((review) => (
          <div className="card" key={review.id}>
            <div className="card-body">
              <h5 className="card-title">{review.name}</h5>
              <p className="card-text">{review.text}</p>
              <p className="card-text">
                <strong>Voto:</strong> {review.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

</>
  );
};

export default MovieDetail;