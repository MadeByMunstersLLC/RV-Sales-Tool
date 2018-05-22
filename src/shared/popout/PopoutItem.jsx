import React from 'react';

import popoutStyles from 'css/components/popout.module.css';

export const PopoutItem = ({
    itemText
  }) => (
  <li className={`${popoutStyles.popout__item}`}>
    <span className={`${popoutStyles.popout__text}`}>
      {itemText}
    </span>
  </li>
)

export default PopoutItem;
