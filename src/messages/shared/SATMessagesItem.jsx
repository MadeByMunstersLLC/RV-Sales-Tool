import React from 'react';
import { NavLink } from 'react-router-dom';

import { Chip } from 'shared/chip';
import MaterialIcon from 'material-icons-react';

import messageStyles from 'css/pages/messages.module.css';

// TODO:
  // • Need to wire up actions
    // • Delete removes from system
    // • Archive removes from all, but keeps on file in archived filter

export const SATMessagesItem = ({
  messageRoute,
  archiveMessage,
  removeMessage,
  item
}) => (
  <li className={`${messageStyles.item__container}`}>
    <NavLink
      to={/messages/`${messageRoute}` + '/'`${item.id}`}
      activeClassName={`${messageStyles.active}`}>
      <div
        className={`${messageStyles.item}`}>
        {!item.broadcast ? (
          <div>
            <Chip
              chipAvatarText={item.message_title}
              chipTitle={item.message_title}
              chipText={item.messages[0].body}
            />
            <time className={`${messageStyles.time}`}>{item.updated_at}</time>
          </div>
        ) : (
          <div className={`${messageStyles.item__text}`}>
            <h5>{item.message_title}</h5>
            {/* This is needs to pull the last message sent */}
            <p>{item.messages[0].body}</p>
            <time className={`${messageStyles.time}`}>{item.updated_at}</time>
          </div>
        )}
        <ul className={`${messageStyles.item__actions}`}>
          <li
            className={`${messageStyles.item__action}`}
            onClick={(e) => archiveMessage(e, item)}
          >
            <MaterialIcon icon="archive" color="#6D727B" size="16px" />
          </li>
          <li
            className={`${messageStyles.item__action}`}
            onClick={(e) => removeMessage(e, item.id)}
          >
            <MaterialIcon icon="delete" color="#6D727B" size="16px" />
          </li>
        </ul>
      </div>
    </NavLink>
  </li>
)

export default SATMessagesItem
