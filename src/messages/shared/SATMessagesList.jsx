import React from 'react';

import SATMessagesItem from 'messages/shared/SATMessagesItem';

import messageStyles from 'css/pages/messages.module.css';

export const SATMessagesList = ({
    messageRoute,
    items
  }) => (
  <ul
    className={`${messageStyles.list}`}
    items={items}>
    {items.map((item, index) =>
      <SATMessagesItem
        messageRoute={messageRoute}
        item={item}
        key={index} />
    )}
  </ul>
)

export default SATMessagesList
