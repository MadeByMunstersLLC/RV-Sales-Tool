import * as React from 'react';

import styles from '../../css/components/Button.module.css';

export const Button = ({
  buttonText
}) => {

  return (
    <button className={`${styles.primary}`}>{buttonText}</button>
  );
};

export default Button;
