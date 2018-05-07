import * as React from 'react';

import styles from './styles/Button.module.css';

export const Button = ({
  buttonText
}) => {

  return (
    <button className={`${styles.primary}`}>{buttonText}</button>
  );
};

export default Button;
