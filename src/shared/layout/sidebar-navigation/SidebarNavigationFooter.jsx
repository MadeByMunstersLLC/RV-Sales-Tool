import React from 'react';

import MaterialIcon from 'material-icons-react';

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
          <span className={`${sidebarStyles.icon}`}>
            <MaterialIcon icon="unfold_less" color="#FFFFFF" />
          </span>
          <span className={`${sidebarStyles.text}`}>
            Minimize
          </span>
        </a>
      </footer>
    )
  }

export default SidebarNavigationFooter;
