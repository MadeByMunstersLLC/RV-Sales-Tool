import React from 'react';

import popoutStyles from '../../css/components/popout.module.css';

export const PopoutList = ({
    children
  }) => (
  <ul className={`${popoutStyles.popout__list}`}>
    {children}
  </ul>
)

export default PopoutList;
