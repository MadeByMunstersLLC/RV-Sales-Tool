import React from 'react';

import layout from 'css/global/layout.module.css';
import sidebarStyles from 'css/modules/sidebar-navigation.module.css';

export const SidebarNavigation = ({
    children
  }) => (
  <nav className={`${sidebarStyles.sidebar} ${layout.page__sidebar}`}>
    {children}
  </nav>
)

export default SidebarNavigation;
