import React from 'react';
import '../css/CreateRecipe.css';
import '../css/General.css';

function CreateRecipe() {
  return (
    <html className='html-create-recipe'>
      <form className='input-container-create-recipe' action=''>
        <p className='text-create-recipe1'>Share your recipe to the world!</p>
        {/* <hr className='general-line'></hr> */}
        <p className='text-create-recipe2'>Name of the food:</p>
        <input
          className='input-create-recipe1'
          type='food-name'
          placeholder='What is it called?'
        />
        <p className='text-create-recipe2'>Cooking steps:</p>
        <input
          className='input-create-recipe2'
          type='food-steps'
          placeholder='Cooking steps here!'
        />
        <button
          className='button-create-recipe'
          type='submit'
        >Submit Recipe</button>
      </form>
    </html>
  )
}

export default CreateRecipe