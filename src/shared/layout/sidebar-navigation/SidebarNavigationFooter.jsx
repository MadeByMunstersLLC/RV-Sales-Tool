import React from 'react';

import MaterialIcon from 'material-icons-react';

import sidebarStyles from '../../../css/modules/sidebar-navigation.module.css';

export const SidebarNavigationFooter = ({
    children
  }) => (
  <footer className={`${sidebarStyles.footer}`}>
    <a href="#" className={`${sidebarStyles.trigger}`}>
      <MaterialIcon icon="arrow_back" color="#FFFFFF" />
      Minimize
    </a>
  </footer>
)

export default SidebarNavigationFooter
