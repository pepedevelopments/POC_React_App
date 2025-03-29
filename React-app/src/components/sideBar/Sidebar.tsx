import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';  

import './Sidebar.css';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header text-center py-3">
          {isOpen ? (
            <img
              src="./../../Assets/logo-planicare-plateforme.png"
              alt="Logo Planicare"
              style={{ width: '197px', height: 'auto' }}
            />
          ) : (
            <img
              src="./../../Assets/favicon-planicare.svg"
              alt="Favicon"
              style={{ width: '46px', height: '46px', objectFit: 'cover' }}
            />
          )}
        </div>

        <ul className="list-unstyled my-5">
          <li>
            <Link
              to="/"
              className={`text ${location.pathname === '/' ? 'active' : ''}`}
            >
              {isOpen && 'Tableau de bord'} {/* Cache le texte si fermé */}
            </Link>
          </li>
          <li>
            <Link
              to="/planning"
              className={`text ${location.pathname === '/planning' ? 'active' : ''}`}
            >
              {isOpen && 'Planning mensuel'} {/* Cache le texte si fermé */}
            </Link>
          </li>
          <li>
            <Link
              to="/historiquePlannings"
              className={`text ${location.pathname === '/historiquePLannings' ? 'active' : ''}`}
            >
              {isOpen && 'Historique de plannings'} {/* Cache le texte si fermé */}
            </Link>
          </li>
          <li>
            <Link
              to="/equipe"
              className={`text ${location.pathname === '/equipe' ? 'active' : ''}`}
            >
              {isOpen && 'Equipe'} {/* Cache le texte si fermé */}
            </Link>
          </li>
        </ul>

        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? '❮' : '❯'}
        </button>

        <div className="sidebar-footer d-flex align-items-center justify-content-between px-4 py-2">
          {isOpen &&
            <><img
              src="./../../Assets/Avatar.png"
              alt="Logo"
              style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
              <span className="text">Florine Claire Daurès</span></>}
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;