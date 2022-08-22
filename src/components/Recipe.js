import React from 'react';
import styles from '../assets/styles/components/Recipe.module.scss';
import imgRecipe from "../assets/images/saumon.jpg";

const Recipe = () => {
  return (
    <div className={`d-flex flex-column ${styles.recipe}`}>
    <div className={`${styles.imageContainer}`}>
        <img src={imgRecipe} alt="saumon" />
    </div>
        <div className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}>
             <h3 className='mb-20'>Recipe</h3>
             <span>coeur</span>
        </div>
       
    </div>
  )
}

export default Recipe