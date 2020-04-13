import React from 'react';
import './header.scss';
import NavBar from '../Navbar/Navbar';
import { FaApple, FaAndroid, FaWindows } from 'react-icons/fa';

export default function Header() {

    return (
        <div className="Header-main container-fluid">
            <NavBar />
            <div className="Header-info">
                <div className="Header-text">
                    <div className="Header-text-title">
                        <h1>Pixter Digital Books</h1>
                    </div>
                    <div className="Header-text-subtitle">
                        <p>Lorem ipsum dolor sit amet?</p>
                        <p>consectetur elit, volupat.</p>
                    </div>
                    <div className="Header-text">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <p>
                            At, nisi! Nostrum exercitationem labore, dolore voluptatum
                            eveniet
                        </p>
                        <p>vitae temporibus qui fugit sed cupiditate. Mollitia</p>
                        <p>necessitatibus saepe odit eaque! Similique quo debitis</p>
                        <p>doloremque expedita neque deserunt eveniet eius.</p>
                    </div>
                    <div className="Header-icon">
                        <FaApple size={ 40 } />
                        <FaAndroid size={ 40 } />
                        <FaWindows size={ 40 } />
                    </div>
                </div>
                <div className="Header-img">
                    <img className="img-fluid" src="/assets/img/ipad.png" />
                </div>
            </div>
        </div>
    )
}