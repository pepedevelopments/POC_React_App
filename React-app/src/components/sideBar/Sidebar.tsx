import React from 'react';
import { Link, useLocation } from 'react-router-dom';  

import './Sidebar.css';

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-header text-center py-3">
          <img
            src="./../../Assets/logo-planicare-plateforme.png" 
            alt="Logo"
            style={{ width: '197px', height: 'auto' }}
          />
        </div>

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

        <div className="sidebar-footer d-flex align-items-center justify-content-between px-4 py-2">
          <img
            src="./../../Assets/Avatar.png"
            alt="Logo"
            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
          />
          <span className="text">Florine Claire Daurès</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;