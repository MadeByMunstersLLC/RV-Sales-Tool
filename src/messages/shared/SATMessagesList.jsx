import React, { Component } from 'react';

import SATMessagesItem from '../shared/SATMessagesItem';

import messageStyles from '../../css/pages/messages.module.css';

export const SATMessagesList = ({
    items
  }) => (
  <ul
    className={`${messageStyles.list}`}
    items={items}>
    {items.map((item, index) =>
      <SATMessagesItem
        item={item}
        index={index} />
    )}
  </ul>
)

export default SATMessagesList
