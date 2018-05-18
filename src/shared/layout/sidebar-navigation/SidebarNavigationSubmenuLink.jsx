import React from 'react';

import sidebarStyles from 'css/modules/sidebar-navigation.module.css';

const clickHandle = (e, props) => {
  e.stopPropagation();
  e.preventDefault();
  window.shell.openExternal(props)
}

export const SidebarNavigationSubmenuLink = ({
    submenuLinkText,
    submenuLinkUrl
  }) => {

    return (
      <li className={`${sidebarStyles.sidebar__item}`}>
        {window.shell ?
          <a
            onClick={(e) => clickHandle(e, submenuLinkUrl)}
            className={`${sidebarStyles.link}`}>
            {submenuLinkText}
          </a>
        :
          <a
            href={submenuLinkUrl}
            target="_blank"
            className={`${sidebarStyles.link}`}>
            {submenuLinkText}
          </a>
        }
      </li>
    )
  }

export default SidebarNavigationSubmenuLink;
