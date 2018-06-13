import * as React from 'react';
import * as classNames from 'classnames';

import dashboardStyles from 'css/pages/dashboard.module.css';

export const DashboardItem = ({
  value,
  dashboardItemSize = 'sm',
  children
}: DashboardItemProps) => {
  const dashboardItemClasses: string = classNames({
    [`${dashboardStyles.item}`]: true,
    [`${dashboardStyles.item}-${dashboardItemSize}`]: true,
  });

  return (
    <div className={dashboardItemClasses}>
      {children}
    </div>
  );
};

export default DashboardItem;
