import React from 'react';

import popoutStyles from '../../css/components/popout.module.css';

export const Popout = ({
    children
  }) => (
  <div className={`${popoutStyles.popout}`}>
    {children}
  </div>
)

export default Popout;
