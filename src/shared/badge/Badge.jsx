import React from 'react';

import badgeStyles from 'css/components/badge.module.css';

export const Badge = ({
  badgeText,
  badgeType
}) => (
  <div className={`${badgeStyles.badge}`}>
    <p className={`${badgeStyles.badge__text}`}>{badgeText}</p>
  </div>
)

export default Badge;
