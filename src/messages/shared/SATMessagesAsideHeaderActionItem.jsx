import React from 'react';

import messageStyles from 'css/pages/messages.module.css';

export const SATMessagesAsideHeaderActionItem = ({
  children
}) => (
  <li className={`${messageStyles.action__item}`}>
    {children}
  </li>
)

export default SATMessagesAsideHeaderActionItem;
