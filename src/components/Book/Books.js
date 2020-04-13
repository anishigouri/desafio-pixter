import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import './book.scss';
import BookInfoModal from './BookInfoModal';

export default function() {
    
    const [ listBooks, setListBooks ] = useState([]);
    const [ showModal, setShowModal ] = useState(false);
    const [ bookSelected, setBookSelected ] = useState({});

    useEffect(() => {
        buildPage();
    }, []);

    function onSelectBook(book) {
        setBookSelected(book);
        setShowModal(true);
    }

    async function buildPage() {
        try {
            const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=HARRY%20POTTER');
            const data = await response.json();
            data && setListBooks(data.items);
        } catch(e) {
            console.error(`Error: ${e}`);
        }
    }

    return (
        <div id="books" className="Books-main container">
            <div className="Books-title">
                <h3>Books</h3>
                <p>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Praesent vitae eros eget tellus</p>
                <p>tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
            </div>
            {
                listBooks.map((book, index) => <BookCard key={ index } data={ book } onSelect={ onSelectBook } />)
            }
            <BookInfoModal 
                show={ showModal } 
                onClose={ () => setShowModal(false) } 
                data={ bookSelected }
            />
        </div>
    )
}