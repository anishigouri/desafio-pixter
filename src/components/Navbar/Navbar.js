import React from 'react';
import './navbar.scss';

export default function NavBar() {

    return (
        <div className="Navbar-main">
            <div className="Navbar-logo">
                <img width="120px" src="/assets/img/logo.png" />
            </div>
            <ul className="Navbar-menu">
                <li>
                    <a href="#books">Books</a>
                </li>
                <li>
                    <a href="#newsletter">Newsletter</a>
                </li>
                <li>
                    <a href="#address">Address</a>
                </li>
            </ul>
        </div>
    )
}