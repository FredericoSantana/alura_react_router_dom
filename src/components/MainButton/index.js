import styles from './MainButton.module.css';

import React from 'react';

const MainButton = ({children, size}) => {
  return (
    <button className={`
      ${styles.botaoPrincipal}
      ${styles[size]}
    `}>{children}</button>
  );
};

export default MainButton;