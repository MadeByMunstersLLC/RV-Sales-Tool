import React from 'react';

import messageStyles from 'css/pages/messages.module.css';

export const MessagesAside = ({
    children
  }) => (
  <aside className={`${messageStyles.aside}`}>
    {children}
  </aside>
)

export default MessagesAside;
