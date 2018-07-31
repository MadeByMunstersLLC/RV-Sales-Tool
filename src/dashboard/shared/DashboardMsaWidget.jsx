import * as React from 'react';

import { SortableElement } from 'react-sortable-hoc';

import DashboardItem from './DashboardItem';

export const DashboardMsaWidget = SortableElement(({
    size,
    title,
  }) => {

    return(
      <DashboardItem
        dashboardItemSize={size}
        dashboardItemTitle={title}
      >
        <div>
          Chart
        </div>
      </DashboardItem>
    )
  }
)

export default DashboardMsaWidget;
