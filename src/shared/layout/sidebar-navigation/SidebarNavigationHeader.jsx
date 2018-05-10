import React from 'react';

import sidebarStyles from '../../../css/modules/sidebar-navigation.module.css';

export const SidebarNavigationHeader = ({
    sidebarNavLogo,
    sidebarNavTitle
  }) => (
  <header className={`${sidebarStyles.header}`}>
    {sidebarNavLogo ? (
      <img
        src={sidebarNavLogo}
        alt={sidebarNavTitle} />
    ) : (
      <h2 className={`${sidebarStyles.title}`}>{sidebarNavTitle}</h2>
    )}
  </header>
)

export default SidebarNavigationHeader;
