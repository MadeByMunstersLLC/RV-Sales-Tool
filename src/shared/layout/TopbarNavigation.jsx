import React from 'react';

import MaterialIcon from 'material-icons-react';

import Avatar from '../../shared/avatar/Avatar.jsx';

import layout from '../../css/global/layout.module.css';
import topbarStyles from '../../css/modules/topbar-navigation.module.css';

export const TopbarNavigation = () => (
  <header className={`${topbarStyles.topbar} ${layout.page__body}`}>
    <nav className={`${topbarStyles.topbar__list} ${topbarStyles.right}`}>
      <ul>
        <li>
          <MaterialIcon icon="notifications_none" color="#DFDFDF" />
        </li>
        <li>
          <Avatar avatarText="Kurt Cunningham" />
        </li>
      </ul>
    </nav>
  </header>
)

export default TopbarNavigation
