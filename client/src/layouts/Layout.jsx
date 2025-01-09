import React from 'react';
import { NavLink } from 'react-router-dom';

// Componente Layout di base
const Layout = ({ children }) => {
  return (
    <div>
      {/* Navbar con link alle pagine */}
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
        </ul>
      </nav>
      
      {/* Contenuto principale */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;