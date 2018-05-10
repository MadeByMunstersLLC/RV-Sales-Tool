import React from 'react';

import popoutStyles from '../../css/components/popout.module.css';

export const PopoutBody = ({
    popoutBodyClasses,
    children
  }) => (
  <div className={`${popoutStyles.popout_body} ${popoutBodyClasses}`}>
    {children}
  </div>
)

export default PopoutBody;
