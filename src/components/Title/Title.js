import React from 'react';
import './title.scss';

export default function Title({ text }) {

    return (
        <main className="Title__main">
            <div className="Title__title">
                <div className="Title__text">{ text }</div>
                <div className="Title__line"></div>
            </div>
        </main>
    )
}