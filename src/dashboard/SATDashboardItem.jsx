import * as React from 'react';
import * as classNames from 'classnames';

import {
  Card,
  CardHeader,
} from 'rv-unity-react';

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
      <Card>
        <CardHeader>
          <h5>{value.title}</h5>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DashboardItem;
