import * as React from 'react';

import { SortableElement } from 'react-sortable-hoc';

import SATDashboardItem from 'dashboard/shared/SATDashboardItem';

import widgetStyles from 'css/modules/dashboard-widget.module.css';

// TODO:
  // • Needs to be wired up and hard coded values removed

export const SATDashboardBankWidget = SortableElement(({
    size,
    title,
  }) => {

    const BodyItem = ({
        label,
        data
      }) => (
        <div className={`${widgetStyles.border_bottom} grid__unity-grid`}>
          <div className={`${widgetStyles.box__left} ${widgetStyles.label}`}>{label}</div>
          <div className={`${widgetStyles.box__right} ${widgetStyles.box__right__sm} ${widgetStyles.box__justifty__right}`}>{data}</div>
        </div>
    );

    return(
      <SATDashboardItem
        dashboardItemSize={size}
        dashboardItemTitle={title}
      >
        <div className={`${widgetStyles.header} grid__unity-grid`}>
          <div className={`${widgetStyles.header__left}`}>
            <span className={`${widgetStyles.box__left} ${widgetStyles.box__dark_blue} ${widgetStyles.label} ${widgetStyles.box__large}`}>Bank Multiplier</span>
            <span className={`${widgetStyles.box__right} ${widgetStyles.box__base_blue} ${widgetStyles.box__large}`}>3.4</span>
          </div>
        </div>
        <div className={`${widgetStyles.body}`}>
          <BodyItem
            label="Yesterday's Commission"
            data="$279.34"
          />
          <BodyItem
            label="MTD Commission"
            data="$2,567.24"
          />
        </div>
      </SATDashboardItem>
    )
  }
)

export default SATDashboardBankWidget;
