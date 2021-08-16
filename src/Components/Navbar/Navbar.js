import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../NavItem/NavItem';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='/home' className="navbar-brand">Inguzo</Link>
                <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <NavItem name='Home' link='/home'/>
                        <NavItem name='About' link='/about'/>
                        <NavItem name='Contact' link='/contact'/>
                        <NavItem name='Real Time+' link='/live'/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
