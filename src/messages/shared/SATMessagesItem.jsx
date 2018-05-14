import React from 'react';
import { NavLink } from 'react-router-dom';

import { Badge } from '../../shared/badge';
import { Chip } from '../../shared/chip';
import MaterialIcon from 'material-icons-react';

import messageStyles from '../../css/pages/messages.module.css';

export const SATMessagesItem = ({
  messageRoute,
  item
}) => (
  <li className={`${messageStyles.item__container}`}>
    <NavLink
      to={'/messages/' + `${messageRoute}` + '/' + `${item.id}`}
      activeClassName={`${messageStyles.active}`}>
      {item.broadcast ? (
        <Badge
          badgeType={item.broadcastColor}
          badgeText={item.broadcastCategory}
        />
      ) : ( '' )}
      <div
        className={`${messageStyles.item}`}>
        {!item.broadcast ? (
          <Chip
            chipAvatarText={item.message_title}
            chipTitle={item.message_title}
            chipText={item.messages[0].body}
          />
        ) : (
          <div className={`${messageStyles.item__text}`}>
            <h5>{item.message_title}</h5>
            <p>{item.messages[0].body}</p>
          </div>
        )}
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
