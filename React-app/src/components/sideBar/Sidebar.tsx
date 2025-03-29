import React from 'react';
import { Link, useLocation } from 'react-router-dom';  

import './Sidebar.css';

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <div className="sidebar">
        <h2 className="text-white text-center">Planicare</h2>
        <ul className="list-unstyled my-5">
          <li>
            <Link
              to="/"
              className={`text ${location.pathname === '/' ? 'active' : ''}`}
            >
              Tableau de bord
            </Link>
          </li>
          <li>
            <Link
              to="/planning"
              className={`text ${location.pathname === '/planning' ? 'active' : ''}`}
            >
              Planning
            </Link>
          </li>
          <li>
            <Link
              to="/equipe"
              className={`text ${location.pathname === '/equipe' ? 'active' : ''}`}
            >
              Equipe
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;