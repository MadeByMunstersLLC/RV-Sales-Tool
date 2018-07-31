import React from 'react';

import messageStyles from '../../css/pages/messages.module.css';

export const MessagesAsideHeader = ({
  children
}) => (
  <header className={`${messageStyles.aside__header}`}>
    {children}
  </header>
)

export default MessagesAsideHeader;
