import React from 'react';

import messageStyles from '../../css/pages/messages.module.css';

export const SATMessagesAsideHeader = ({
  children
}) => (
  <header className={`${messageStyles.aside__header}`}>
    {children}
  </header>
)

export default SATMessagesAsideHeader
