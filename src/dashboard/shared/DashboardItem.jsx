import * as React from 'react';
import * as classNames from 'classnames';

import {
  Card,
  CardBody,
  CardHeader,
} from 'rv-unity-react';

import dashboardStyles from 'css/pages/dashboard.module.css';

export const DashboardItem = ({
  value,
  dashboardItemSize = 'sm',
  dashboardItemTitle,
  children,
}: DashboardItemProps) => {
  const dashboardItemClasses: string = classNames({
    [`${dashboardStyles.item}`]: true,
    [`${dashboardStyles.item}-${dashboardItemSize}`]: true,
  });

  return (
    <div className={dashboardItemClasses}>
      <Card>
        <CardHeader>
          <h5>{dashboardItemTitle}</h5>
        </CardHeader>
        <CardBody>
          {children}
        </CardBody>
      </Card>
    </div>
  );
};

export default DashboardItem;
