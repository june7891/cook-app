import React, { useState } from 'react';
import styles from '../assets/styles/components/Recipe.module.scss';


const Recipe = ({title, image}) => {

  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked)
  }

  return (
    <div className={`d-flex flex-column ${styles.recipe}`}>
    <div className={`${styles.imageContainer}`}>
        <img src={image} alt="saumon" />
    </div>
        <div className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}>
             <h3 className='mb-20'>{title}</h3>
             <i onClick={handleClick} className={` ${liked ? 'text-primary' : ''} fa-solid fa-lg fa-heart`}></i>
        </div>
       
    </div>
  )
}

export default Recipe;