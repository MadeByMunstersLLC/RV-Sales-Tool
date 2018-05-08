import React from 'react';

import layout from '../../css/global/layout.module.css';

export const PageContent = ({
    children
  }) => (
  <div className={`${layout.page__content}`}>
    {children}
  </div>
)

export default PageContent
