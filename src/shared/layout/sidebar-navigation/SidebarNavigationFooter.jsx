import React from 'react';

import minimizeIcon from 'images/icons/expand.svg';

import sidebarStyles from 'css/modules/sidebar-navigation.module.css';

export const SidebarNavigationFooter = ({
    toggleSideNavTrigger,
    children
  }) => {

    return (
      <footer className={`${sidebarStyles.sidebar__footer}`}>
        <a
          className={`${sidebarStyles.trigger}`}
          onClick={() => toggleSideNavTrigger()}
        >
          <img
            src={minimizeIcon}
            className={`${sidebarStyles.icon}`}
            alt="Collapse Sidebar Trigger"
          />
          <span className={`${sidebarStyles.text}`}>
            Minimize
          </span>
        </a>
      </footer>
    )
  }

export default SidebarNavigationFooter;
