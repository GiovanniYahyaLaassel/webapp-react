import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-3">
      <div className="container">
        <div className="row">
          <div className="text-center">

            <Link to='/' className="text-white text-decoration-none">
              Torna alla Home
            </Link> 

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;