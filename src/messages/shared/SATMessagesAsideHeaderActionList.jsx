import React from 'react';

import messageStyles from 'css/pages/messages.module.css';

export const SATMessagesAsideHeaderActionList = ({
    children
  }) => (
  <ul className={`${messageStyles.action__list}`}>
    {children}
  </ul>
)

export default SATMessagesAsideHeaderActionList;
