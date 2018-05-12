import React from 'react';
import { NavLink } from 'react-router-dom';

import { Chip } from '../../shared/chip';
import MaterialIcon from 'material-icons-react';

import messageStyles from '../../css/pages/messages.module.css';

export const SATMessagesItem = ({
  item
}) => (
  <li className={`${messageStyles.item__container}`}>
    <NavLink
      to={"/messages/mail/" + `${item.id}`}>
      <div className={`${messageStyles.item}`}>
        <Chip
          chipAvatarText={item.author}
          chipTitle={item.author}
          chipText={item.text}
        />
        <ul className={`${messageStyles.item__actions}`}>
          <li className={`${messageStyles.item__action}`}>
            <MaterialIcon icon="archive" color="#6D727B" size="16px" />
          </li>
          <li className={`${messageStyles.item__action}`}>
            <MaterialIcon icon="delete" color="#6D727B" size="16px" />
          </li>
        </ul>
      </div>
    </NavLink>
  </li>
)

export default SATMessagesItem
