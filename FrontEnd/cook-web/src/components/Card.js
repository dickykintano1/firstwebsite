import React from 'react';
import './Card.css';

const Card = ({name, id}) => {
    return (
        <div className='card'>
            <img alt='recipes' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default Card;