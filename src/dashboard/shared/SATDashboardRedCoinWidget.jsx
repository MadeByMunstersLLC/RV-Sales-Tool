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

export const SATDashboardRedCoinWidget = SortableElement(({
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
            <div className={`${widgetStyles.header} grid__unity-grid`}>
              <div className={`${widgetStyles.header__left}`}>
                <span className={`${widgetStyles.box__left} ${widgetStyles.box__dark_blue} ${widgetStyles.label} ${widgetStyles.box__large}`}>Current Red Coin Balance</span>
                <span className={`${widgetStyles.box__right} ${widgetStyles.box__base_blue} ${widgetStyles.box__large}`}>18,000</span>
              </div>
            </div>
            <div className={`${widgetStyles.body}`}>
              <form>
                <label className={`${widgetStyles.label}`}>TRANSFER TO MY RED WALLET CARD</label>
                <fieldset>
                  <input
                    type="number"
                    className={`${widgetStyles.input}`}
                    placeholder="Enter amount to transfer…"
                    required
                  />
                  <input
                    type="submit"
                    className={`${widgetStyles.button}`}
                    value="Transfer"
                  />
                </fieldset>
              </form>
            </div>
          </CardBody>
        </Card>
      </SATDashboardItem>
    )
  }
)

export default SATDashboardRedCoinWidget;
