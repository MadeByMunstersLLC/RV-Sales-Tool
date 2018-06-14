import * as React from 'react';

import { SortableElement } from 'react-sortable-hoc';

import {
  Card,
  CardBody,
  CardHeader,
} from 'rv-unity-react';
import SATDashboardItem from 'dashboard/shared/SATDashboardItem';

import widgetStyles from 'css/modules/dashboard-widget.module.css';

// TODO:
  // • Needs to be wired up and hard coded values removed

export const SATDashboardFunFiveWidget = SortableElement(({
    size,
    title,
  }) => {

    const BodyItem = ({
        label,
        data
      }) => (
        <li className={`${widgetStyles.border_right} grid__unity-grid__span-columns-3`}>
          <label className={`${widgetStyles.label}`}>{label}</label>
          <div className="grid__unity-grid">
            <div className={`${widgetStyles.box__left} ${widgetStyles.box__dark_blue} ${widgetStyles.box__full} grid__unity-grid__span-columns-7`}></div>
            <div className={`${widgetStyles.box__right} ${widgetStyles.box__base_blue} ${widgetStyles.box__full} grid__unity-grid__span-columns-5`}>{data}</div>
          </div>
        </li>
    );

    return(
      <SATDashboardItem
        dashboardItemSize={size}
      >
        <Card>
          <CardHeader>
            <h5>{title}</h5>
          </CardHeader>
          <CardBody>
            <div className={`${widgetStyles.header} grid__unity-grid`}>
              <div className={`${widgetStyles.header__left} grid__unity-grid__span-columns-6`}>
                <span className={`${widgetStyles.box__left} ${widgetStyles.label}`}>Total Strikes</span>
                <span className={`${widgetStyles.box__right}`}>2</span>
              </div>
              <div className={`${widgetStyles.header__middle} grid__unity-grid__span-columns-2`}>
                <div className={`${widgetStyles.header__divider}`} />
              </div>
              <div className={`${widgetStyles.header__right} grid__unity-grid__span-columns-4`}>
                <p className={`${widgetStyles.label}`}>Next Roll Off:</p>
                <p className={`${widgetStyles.label__alt}`}>Wed, Apr 11th, 2018</p>
              </div>
            </div>
            <div className={`${widgetStyles.body}`}>
              <ul className="grid__unity-grid">
                <BodyItem
                  label="TCPA"
                  data="0"
                />
                <BodyItem
                  label="REC LINE"
                  data="0"
                />
                <BodyItem
                  label="PCI"
                  data="0"
                />
                <BodyItem
                  label="ELV. RISJ"
                  data="0"
                />
              </ul>
            </div>
          </CardBody>
        </Card>
      </SATDashboardItem>
    )
  }
)

export default SATDashboardFunFiveWidget;
