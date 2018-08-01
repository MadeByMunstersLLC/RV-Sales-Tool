import React from 'react';

import layoutStyles from '../../css/global/layout.module.css';

export const PageContent = ({
    pageContentScroll = false,
    pageContentTabs = false,
    children
  }) => (
  <div
    className={`${layoutStyles.page__content}
      ${pageContentScroll ? `${layoutStyles.page__content__scroll}` : ''}
      ${pageContentTabs ? `${layoutStyles.tabs__offset}` : ''}`}
    >
    {children}
  </div>
)

export default PageContent;
