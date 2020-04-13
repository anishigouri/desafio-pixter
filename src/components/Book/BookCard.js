import React from 'react';

export default function BookCard({ data, onSelect }) {

    return(
        <div className="BookCard-main" onClick={ () => onSelect(data) }>
            <div className="BookCard-image text-center pt-2">
                <img src={ data.volumeInfo.imageLinks.thumbnail } alt={ data.id } />
            </div>
        </div>
    )
}