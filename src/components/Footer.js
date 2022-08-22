import React from 'react';
import styles from "../assets/styles/components/Footer.module.scss";


const Footer = () => {
  return (
    <footer className={`${styles.footer} d-flex justify-content-center align-items-center`}>
  <p>Copyright © 2022 Cookchef, Inc</p>
    </footer>
  )
}

export default Footer;