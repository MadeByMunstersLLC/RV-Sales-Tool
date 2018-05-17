import React from 'react';

import MaterialIcon from 'material-icons-react';

import styles from 'css/modules/page-header.module.css';

export const PageHeader = ({
    pageTitleLeft,
    pageTitleIconLeft,
    pageTitleRight,
    pageTitleIconRight,
  }) => (
  <header className={`${styles.header}`}>
    <div className={`${styles.header__left}`}>
      <MaterialIcon icon={pageTitleIconLeft} color="#9496A2" />
      <p>{pageTitleLeft}</p>
    </div>
    <div className={`${styles.header__right}`}>
      <MaterialIcon icon={pageTitleIconRight} color="#0072FF" />
      <span>{pageTitleRight}</span>
    </div>
  </header>
)

export default PageHeader
