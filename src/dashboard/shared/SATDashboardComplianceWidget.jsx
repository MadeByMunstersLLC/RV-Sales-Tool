import * as React from 'react';

import { SortableElement } from 'react-sortable-hoc';

import SATDashboardItem from 'dashboard/shared/SATDashboardItem';

export const SATDashboardComplianceWidget = SortableElement(({
    size,
    title,
  }) => {

    return(
      <SATDashboardItem
        dashboardItemSize={size}
        dashboardItemTitle={title}
      >
        <div>
          Chart
        </div>
      </SATDashboardItem>
    )
  }
)

export default SATDashboardComplianceWidget;
