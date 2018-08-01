import React from 'react';

import popoutStyles from '../../css/components/popout.module.css';

export const Popout = ({
    classes,
    children
  }) => (
  <div className={`${popoutStyles.popout} ${classes}`}>
    {children}
  </div>
)

export default Popout;
