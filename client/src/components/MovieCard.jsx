import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ image, title, link }) => {
  return (
    <div className="card h-100">

      {/* Immagine del film */}
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ objectFit: 'cover', height: '350px' }}
      />

      {/* Corpo della card */}

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>

        {/* Pulsante "Read more" */}
        <div className="mt-auto">
          <Link to={link} className="btn btn-primary">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;