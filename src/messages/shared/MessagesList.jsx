import React from 'react';

import MessagesItem from 'messages/shared/MessagesItem';

import messageStyles from 'css/pages/messages.module.css';

export const MessagesList = ({
    messageRoute,
    archiveMessage,
    removeMessage,
    items,
  }) => (
  <ul
    className={`${messageStyles.list}`}
    items={items}>
    {items.map((item, index) =>
      <MessagesItem
        messageRoute={messageRoute}
        removeMessage={removeMessage}
        archiveMessage={archiveMessage}
        item={item}
        key={index}
      />
    )}
  </ul>
)

export default MessagesList;
