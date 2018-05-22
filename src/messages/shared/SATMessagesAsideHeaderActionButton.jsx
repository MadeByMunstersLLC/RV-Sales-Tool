import React from 'react';

import MaterialIcon from 'material-icons-react';

import messageStyles from 'css/pages/messages.module.css';

export const SATMessagesAsideHeaderActionButton = ({
  handleClick = () => undefined,
  actionItemIcon,
  actionItemIconColor,
}) => (
  <a
    className={`${messageStyles.action__trigger}`}
    onClick={(e) => handleClick(e)}
  >
    <MaterialIcon
      icon={actionItemIcon}
      color={actionItemIconColor}
    />
  </a>
)

export default SATMessagesAsideHeaderActionButton
