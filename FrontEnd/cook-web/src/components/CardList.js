import React from 'react';
import Card from './Card'
import './CardList.css'

const CardList = ({recipes}) => {
    return (
        <div className='cardlist'>
            {recipes.map((recipe, i) => {
                return (
                    <Card 
                    key={i}
                    id={recipes[i].id}
                    name={recipes[i].name} 
                    />
                );
            })}
        </div>
    );
}

export default CardList;