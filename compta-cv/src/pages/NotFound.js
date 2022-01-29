import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Page non trouvée</h3>
        <NavLink exact to ="/">
          <span>Accueil</span>
        </NavLink>
        </div>
    </div>
  );
}

export default NotFound;