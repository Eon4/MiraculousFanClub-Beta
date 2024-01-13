// header.jsx

import React from 'react';
import style from '../Header/header.module.scss'; 
import miraculousHeader from '../../assets/Images/MiraculousHeader.png';

export const Header = () => {
  return (
    <div className={style.heroContainer}>
      <img className={style.ladyBugHeader} src={miraculousHeader} alt="headerimage" />
      {/* <h2>Header title</h2> */}
    </div>
  );
};
