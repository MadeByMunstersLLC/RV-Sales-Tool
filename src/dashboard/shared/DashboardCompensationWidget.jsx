import * as React from 'react';

import { SortableElement } from 'react-sortable-hoc';

import DashboardItem from 'dashboard/shared/DashboardItem';

export const DashboardCompensationWidget = SortableElement(({
    size,
    title,
  }) => {

    return(
      <DashboardItem
        dashboardItemSize={size}
        dashboardItemTitle={title}
      >
        <div>
          Graph
        </div>
      </DashboardItem>
    )
  }
)

export default DashboardCompensationWidget;
