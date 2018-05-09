import * as React from 'react';
import * as classNames from 'classnames';

import styles from '../css/pages/dashboard.module.css';

export const DashboardItem = ({
  dashboardItemSize = 'sm',
  children
}: DashboardItemProps) => {
  const dashboardItemClasses: string = classNames({
    [`${styles.item}`]: true,
    [`${styles.item}-${dashboardItemSize}`]: true,
  });

  return (
    <div className={dashboardItemClasses}>
      {/* TODO: Replace children with card component */}
      {children}
    </div>
  );
};

export default DashboardItem;
