import React, { Component } from 'react';

import { Avatar } from '../../shared/avatar';
import { Chip } from '../../shared/chip';

import chipStyles from '../../css/components/chip.module.css';
import messageStyles from '../../css/pages/messages.module.css';

export const SATMessagesItem = ({
  item,
  index
}) => (
  <li
    className={`${messageStyles.item}`}
    key={index}>
    <Chip
      chipAvatarText={item.author}
      chipTitle={item.author}
      chipText={item.text} />
  </li>
)

export default SATMessagesItem
