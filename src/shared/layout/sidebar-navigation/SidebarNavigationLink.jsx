import React from 'react';
import { NavLink } from 'react-router-dom';

import MaterialIcon from 'material-icons-react';

import sidebarStyles from '../../../css/modules/sidebar-navigation.module.css';

export const SidebarNavigationLink = ({
    sidebarNavLinkText,
    sidebarNavLinkIcon,
    sidebarNavLinkUrl
  }) => (
    <li className={`${sidebarStyles.sidebar__item}`}>
      <NavLink
        to={sidebarNavLinkUrl}
        className={`${sidebarStyles.sidebar__link}`}
        activeClassName={`${sidebarStyles.active}`}>
        <span className={`${sidebarStyles.icon}`}>
          <MaterialIcon icon={sidebarNavLinkIcon} />
        </span>
        <span className={`${sidebarStyles.text}`}>
          {sidebarNavLinkText}
        </span>
      </NavLink>
    </li>
)

export default SidebarNavigationLink;
