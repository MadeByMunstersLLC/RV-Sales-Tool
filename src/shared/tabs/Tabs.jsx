import React from 'react';

import tabStyles from 'css/components/tabs.module.css';

export const Tabs = ({
    tabsPageHeader = false,
    children
  }) => (
  <nav className={`${tabStyles.tabs} ${tabsPageHeader ? `${tabStyles.tabs__offset}` : ''}`}>
    <ul>
      {children}
    </ul>
  </nav>
)

export default Tabs;
