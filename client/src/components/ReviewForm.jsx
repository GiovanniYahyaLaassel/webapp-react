import React from 'react';

const FormReview = () => {

  return (

    <div className="container mt-4">
      <h3 className="mb-3">Aggiungi la tua recensione</h3>
      <form>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nome
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Inserisci il tuo nome"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="review" className="form-label">
            Recensione
          </label>
          <textarea
            id="review"
            className="form-control"
            rows="3"
            placeholder="Scrivi la tua recensione"
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Voto
          </label>
          <select id="rating" className="form-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <button type="button" className="btn btn-primary">
          Invia
        </button>
      </form>
    </div>
  );
};

export default FormReview;