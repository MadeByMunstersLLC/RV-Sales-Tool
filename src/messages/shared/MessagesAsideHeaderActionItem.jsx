import React from 'react';

import messageStyles from 'css/pages/messages.module.css';

export const MessagesAsideHeaderActionItem = ({
  children
}) => (
  <li className={`${messageStyles.action__item}`}>
    {children}
  </li>
)

export default MessagesAsideHeaderActionItem;
