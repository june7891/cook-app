import React, { useState } from "react";
import styles from '../assets/styles/pages/Homepage.module.scss';
import Recipe from "../components/Recipe";
import { data } from '../data/recipes';

const Homepage = () => {


  const recipes = data;

  const [filter, setFilter] = useState('');

  const handleInput = (e) => {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());

  };


  return (
    <div className="flex-fill container p-20">
      <h2 className="my-30">Découvrez nos nouvelles recettes</h2>
      <div className={`card d-flex flex-column p-20 ${styles.contentCard}`}>

      <div className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar}`}>
      <i class={`fa-solid fa-magnifying-glass mr-15`}></i>
      <input type="text" placeholder="Rechercher" className="flex-fill" onInput={handleInput} />
      </div>
        <div className={styles.grid}>
        {
          recipes.filter(recipe=>recipe.title.toLowerCase().includes(filter)).map(recipe => (
            <Recipe key={recipe._id} 
            title = {recipe.title} 
            image={recipe.image}/>
          ))
        }
      </div>
      </div>
      
    </div>
  );
};

export default Homepage;
