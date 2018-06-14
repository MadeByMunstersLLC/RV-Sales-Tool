import * as React from 'react';

import { SortableElement } from 'react-sortable-hoc';

import {
  Card,
  CardBody,
  CardHeader,
} from 'rv-unity-react';
import SATDashboardItem from 'dashboard/shared/SATDashboardItem';

export const SATDashboardMsaWidget = SortableElement(({
    size,
    title,
  }) => {

    return(
      <SATDashboardItem
        dashboardItemSize={size}
      >
        <Card>
          <CardHeader>
            <h5>{title}</h5>
          </CardHeader>
          <CardBody>
            Chart
          </CardBody>
        </Card>
      </SATDashboardItem>
    )
  }
)

export default SATDashboardMsaWidget;
