import React, { useState } from 'react';
import styles from "../assets/styles/components/HeaderMenuResp.module.scss";

const HeaderMenuResp = () => {

   


  return (
    <ul className={`${styles.menuContainer} card p-20 `}>
        <li>Wishlist</li>
        <li>Connexion</li>
    </ul>
  )
}

export default HeaderMenuResp;