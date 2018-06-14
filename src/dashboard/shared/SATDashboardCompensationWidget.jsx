import * as React from 'react';

import { SortableElement } from 'react-sortable-hoc';

import {
  Card,
  CardBody,
  CardHeader,
} from 'rv-unity-react';
import SATDashboardItem from 'dashboard/shared/SATDashboardItem';

export const SATDashboardCompensationWidget = SortableElement(({
    size,
    title,
  }) => {

    return(
      <SATDashboardItem
        dashboardItemSize={size}
        dashboardItemTitle={title}
      >
        <div>
          Graph
        </div>
      </SATDashboardItem>
    )
  }
)

export default SATDashboardCompensationWidget;
