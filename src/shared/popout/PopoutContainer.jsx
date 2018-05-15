import React from 'react';

import popoutStyles from 'css/components/popout.module.css';

export const PopoutContainer = ({
    children
  }) => (
  <div className={`${popoutStyles.popout__container}`}>
    {children}
  </div>
)

export default PopoutContainer;
