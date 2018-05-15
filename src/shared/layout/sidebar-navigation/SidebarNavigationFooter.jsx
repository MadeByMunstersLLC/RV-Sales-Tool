import React from 'react';

import sidebarStyles from 'css/modules/sidebar-navigation.module.css';

export const SidebarNavigationFooter = ({
    children
  }) => (
  <footer className={`${sidebarStyles.sidebar__footer}`}>
    <a className={`${sidebarStyles.trigger}`}>
      Minimize
    </a>
  </footer>
)

export default SidebarNavigationFooter;
