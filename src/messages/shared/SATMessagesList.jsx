import React from 'react';

import SATMessagesItem from 'messages/shared/SATMessagesItem';

import messageStyles from 'css/pages/messages.module.css';

export const SATMessagesList = ({
    messageRoute,
    removeMessage,
    items,
  }) => (
  <ul
    className={`${messageStyles.list}`}
    items={items}>
    {items.map((item, index) =>
      <SATMessagesItem
        messageRoute={messageRoute}
        removeMessage={removeMessage}
        item={item}
        key={index}
      />
    )}
  </ul>
)

export default SATMessagesList
