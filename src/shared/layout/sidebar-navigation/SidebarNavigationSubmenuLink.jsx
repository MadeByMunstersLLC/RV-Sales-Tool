import React from 'react';

import sidebarStyles from '../../../css/modules/sidebar-navigation.module.css';

export const SidebarNavigationSubmenuLink = ({
    submenuLinkText,
    submenuNavLinkUrl
  }) => (
    <li className={`${sidebarStyles.item}`}>
      <a
        href={submenuNavLinkUrl}
        className={`${sidebarStyles.submenu_link}`}>
        {submenuLinkText}
      </a>
    </li>
)

export default SidebarNavigationSubmenuLink;
