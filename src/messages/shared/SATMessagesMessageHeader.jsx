import React from 'react';

import messageStyles from 'css/pages/messages.module.css';

export const SATMessagesMessageHeader = ({
  children
}) => (
  <header className={`${messageStyles.content__header}`}>
    {children}
  </header>
)

export default SATMessagesMessageHeader;
