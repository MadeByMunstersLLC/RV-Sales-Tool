import React from 'react';

import tabStyles from '../../css/components/tabs.module.css';
import cardTabstyles from '../../css/components/card-tabs.module.css';

export const Tabs = ({
    tabsPageHeader = false,
    tabsCardNav = false,
    children
  }) => (
  <nav className={`
    ${tabStyles.tabs}
    ${tabsPageHeader ? `${tabStyles.tabs__offset}` : ''}
    ${tabsCardNav ? `${cardTabstyles.card__tabs}` : ''}
  `}>
    <ul>
      {children}
    </ul>
  </nav>
)

export default Tabs;
