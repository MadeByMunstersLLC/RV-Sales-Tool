import React from 'react';

import { ExternalAppLink } from '../../misc';

import sidebarStyles from '../../../css/modules/sidebar-navigation.module.css';

export const SidebarNavigationSubmenuLink = ({
    submenuLinkText,
    submenuLinkUrl
  }) => {

    return (
      <li className={`${sidebarStyles.sidebar__item}`}>
        {window.shell ?
          <a
            className={`${sidebarStyles.link}`}>
            <ExternalAppLink
              linkUrl={submenuLinkUrl}>
              {submenuLinkText}
            </ExternalAppLink>
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
