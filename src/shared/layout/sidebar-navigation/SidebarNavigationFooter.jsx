import React from 'react';

import sidebarStyles from '../../../css/modules/sidebar-navigation.module.css';

export const SidebarNavigationFooter = ({
    children
  }) => (
  <footer className={`${sidebarStyles.footer}`}>
    <a href="#" className={`${sidebarStyles.trigger}`}>
      Minimize
    </a>
  </footer>
)

export default SidebarNavigationFooter;
