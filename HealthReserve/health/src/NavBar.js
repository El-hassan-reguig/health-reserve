import React from 'react';
import logo from './icon/healthcare.png';
import { Link } from 'react-router-dom';
import './navbar.css'



export default function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand">
          <img
            src={logo}
            height="40"
            alt="HealthReserve"
            loading="lazy"
            style={{ marginTop: '-1px' }}
          />
        </a>
        <button
          data-mdb-collapse-init
          className="navbar-toggler"
          type="button"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
             <Link className='btn' to={'/Home'}>Home</Link>
            </li>
            <li className="nav-item">
            <Link className='btn' to={'/about'}>About</Link>
            </li><li className="nav-item">
            <Link className='btn' to={'/contact'}>Contact</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button data-mdb-ripple-init type="button" className="btn btn-link px-3 me-2"><Link className='btn' to={'/login'}>Login</Link>
              
            </button>
            <button data-mdb-ripple-init type="button" className="btn btn-success me-3">
              Take appointement
            </button>
            
          </div>
        </div>
      </div>
    </nav>
  );
}


