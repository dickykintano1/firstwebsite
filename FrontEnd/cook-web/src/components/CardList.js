import React from 'react';
import Card from './Card'

const CardList = ({recipes}) => {
    return (
        <div>
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