import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false);
        window.scrollTo(0, 0);
    };

    // Determinar qué vista está activa basándose en la ruta
    const isActive = (path) => location.pathname === path;
    const isDelivery = location.pathname === '/delivery';

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                {isDelivery ? (
                    <div className="logo">
                        <span className="logo-text">Tu Marca</span>
                    </div>
                ) : (
                    <a href="#" className="logo" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>
                        <span className="logo-text">Tu Marca</span>
                    </a>
                )}

                {!isDelivery && (
                    <>
                        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                            <button
                                className={`nav-btn ${isActive('/') ? 'active-link' : ''}`}
                                onClick={() => handleNavigation('/')}
                            >
                                Inicio
                            </button>
                            <button
                                className={`nav-btn ${isActive('/menu') ? 'active-link' : ''}`}
                                onClick={() => handleNavigation('/menu')}
                            >
                                Menú
                            </button>
                            <button
                                className={`nav-btn ${isActive('/contacto') ? 'active-link' : ''}`}
                                onClick={() => handleNavigation('/contacto')}
                            >
                                Contacto
                            </button>

                        </div>

                        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                            <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                            <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
