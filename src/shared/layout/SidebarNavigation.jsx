import React from 'react';

import styles from '../../css/modules/SidebarNavigation.module.css';

export const SidebarNavigation = ({
    children
  }) => (
  <nav className={`${styles.sidebar}`}>
    {children}
  </nav>
)

export default SidebarNavigation
