import React from 'react';

import MaterialIcon from 'material-icons-react';

import styles from '../../css/modules/page-header.module.css';

export const PageHeader = ({
    pageTitleLeft,
    pageTitleIconLeft,
    pageTitleRight,
    pageTitleIconRight,
  }) => (
  <header className={`${styles.header}`}>
    <div className={`${styles.left}`}>
      <MaterialIcon icon={pageTitleIconLeft} color="#DFDFDF" />
      <p>{pageTitleLeft}</p>
    </div>
    <div className={`${styles.right}`}>
      <MaterialIcon icon={pageTitleIconRight} color="#DFDFDF" />
      <a href="#">{pageTitleRight}</a>
    </div>
  </header>
)

export default PageHeader
