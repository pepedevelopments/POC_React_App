import React from 'react';
import { Link } from 'react-router-dom';  

import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div>
      <div className="sidebar">
        <h2 className="text-white text-center">Planicare</h2>
        <ul className="list-unstyled my-5">
          <li>
            <Link to="/" className="text">Tableau de bord</Link>
          </li>
          <li>
            <Link to="/planning" className="text">Planning</Link>
          </li>
          <li>
            <Link to="/equipe" className="text">Equipe</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;