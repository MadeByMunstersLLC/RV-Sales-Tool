import React from 'react';

import messageStyles from 'css/pages/messages.module.css';

export const MessagesAsideHeaderActionList = ({
    children
  }) => (
  <ul className={`${messageStyles.action__list}`}>
    {children}
  </ul>
)

export default MessagesAsideHeaderActionList;
