import React from 'react';

import { Avatar } from 'shared/avatar';

import chipStyles from 'css/components/chip.module.css';

export const Chip = ({
  chipAvatarText,
  chipAvatarImage,
  chipTitle,
  chipText
}) => (
  <div className={`${chipStyles.chip}`}>
    <div className={`${chipStyles.chip__left}`}>
      <Avatar
        avatarText={chipAvatarText}
        avatarImage={chipAvatarImage} />
    </div>
    <div className={`${chipStyles.chip__right}`}>
      <h5 className={`${chipStyles.chip__title}`}>{chipTitle}</h5>
      <p className={`${chipStyles.chip__text}`}>{chipText}</p>
    </div>
  </div>
)

export default Chip;
