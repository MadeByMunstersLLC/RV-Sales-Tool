import * as React from 'react';
import * as classNames from 'classnames';

import cardStyles from 'css/components/card.module.css';
import dashboardStyles from 'css/pages/dashboard.module.css';

export const DashboardItem = ({
  dashboardItemSize = 'sm',
  children
}: DashboardItemProps) => {
  const dashboardItemClasses: string = classNames({
    [`${dashboardStyles.item}`]: true,
    [`${dashboardStyles.item}-${dashboardItemSize}`]: true,
    [`${cardStyles.card}`]: true
  });

  return (
    <div className={dashboardItemClasses}>
      {/* TODO: Replace children with card component */}
      {children}
    </div>
  );
};

export default DashboardItem;
