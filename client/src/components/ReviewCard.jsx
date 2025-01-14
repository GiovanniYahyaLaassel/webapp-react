import React from 'react';

const ReviewCard = ({  reviews  }) => {
  return (
    <div className="d-flex flex-column gap-3">
      { reviews.map((review) => (
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
  );
};

export default ReviewCard;