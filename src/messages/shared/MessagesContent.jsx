import React from 'react';

import messageStyles from '../../css/pages/messages.module.css';

export const MessagesContent = ({
  children
}) => (
  <div className={`${messageStyles.content}`}>
    {children}
  </div>
)

export default MessagesContent;
