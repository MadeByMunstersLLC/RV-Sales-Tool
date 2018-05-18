import React from 'react';
import * as classNames from 'classnames';

import badgeStyles from 'css/components/badge.module.css';

export const BadgeTypes = {
  PRIMARY: 0,
  SUCCESS: 1,
  CAUTION: 2,
  DANGER: 3,
}

export const Badge = ({
  badgeText,
  badgeType
}) => {
  const badgeClasses: string = classNames({
    [`${badgeStyles.badge}`]: true,
    [`${badgeStyles.primary}`]: badgeType === BadgeTypes.PRIMARY,
    [`${badgeStyles.success}`]: badgeType === BadgeTypes.SUCCESS,
    [`${badgeStyles.caution}`]: badgeType === BadgeTypes.CAUTION,
    [`${badgeStyles.danger}`]: badgeType === BadgeTypes.DANGER,
  });

  return(
    <div className={`${badgeClasses}`}>
      <p className={`${badgeStyles.badge__text}`}>{badgeText}</p>
    </div>
  );
}

export default Badge;
