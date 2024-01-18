import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
        <section
          style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
              About me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
              Resume
            </Link>
          </li>
        </ul>
        </section>
  )
}

export default Navigation;
