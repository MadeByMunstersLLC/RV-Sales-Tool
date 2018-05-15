import React from 'react';

import sidebarStyles from 'css/modules/sidebar-navigation.module.css';

export const SidebarNavigationList = ({
    children
  }) => (
  <ul className={`${sidebarStyles.sidebar__list}`}>
    {children}
  </ul>
)

export default SidebarNavigationList;
