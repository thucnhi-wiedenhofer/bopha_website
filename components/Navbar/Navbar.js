import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from './../../public/images/logo_bopha.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image src={logo} alt="logo" width="100" height="100" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="./index.html#home"
              >
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="./index.html#aPropos">
                A propos
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="./pages/services.html"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    className="dropdown-item"
                    href="./pages/services.html#decoration"
                  >
                    Evènements
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="./pages/services.html#coursFloral"
                  >
                    Cours d'Art Floral
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="./pages/services.html#jardin"
                  >
                    Conception de jardin
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="./pages/galerie.html">
                Galerie
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="./pages/contact.html">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
