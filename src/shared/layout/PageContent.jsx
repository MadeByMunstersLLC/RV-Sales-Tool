import React from 'react';

import layoutStyles from '../../css/global/layout.module.css';

export const PageContent = ({
    pageContentTabs = false,
    children
  }) => (
  <div className={`${layoutStyles.page__content} ${pageContentTabs ? `${layoutStyles.tabs__offset}` : ''}`}>
    {children}
  </div>
)

export default PageContent
