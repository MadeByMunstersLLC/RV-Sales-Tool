import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import SATWorkforceMarketplaceOvertime from 'workforce/marketplace/overtime/SATWorkforceMarketplaceOvertime';
import SATWorkforceMarketplaceShiftSwap from 'workforce/marketplace/shift-swap/SATWorkforceMarketplaceShiftSwap';
import SATWorkforceMarketplaceTimeoff from 'workforce/marketplace/timeoff/SATWorkforceMarketplaceTimeoff';
import { Tabs, Tab } from 'shared/tabs/';

import cardTabstyles from 'css/components/card-tabs.module.css';

class SATWorkforceMarketplaceIndex extends Component {

  render() {

    return (
      <div className={`${cardTabstyles.card__tabs__container}`}>
        <Switch>
          <Route
            exact
            path="/workforce/marketplace">
            <Redirect to="/workforce/marketplace/timeoff"/>
          </Route>
          <Route
            path="/workforce/marketplace/timeoff"
            component={SATWorkforceMarketplaceTimeoff}
          />
          <Route
            path="/workforce/marketplace/overtime"
            component={SATWorkforceMarketplaceOvertime}
          />
          <Route
            path="/workforce/marketplace/shift_swap"
            component={SATWorkforceMarketplaceShiftSwap}
          />
        </Switch>
        <Tabs
          tabsPageHeader={false}
          tabsCardNav={true}
        >
          <Tab
            tabText="Timeoff"
            tabUrl="/workforce/marketplace/timeoff"
          />
          <Tab
            tabText="Overtime"
            tabUrl="/workforce/marketplace/overtime"
          />
          <Tab
            tabText="Shift Swaps"
            tabUrl="/workforce/marketplace/shift_swap"
          />
        </Tabs>
      </div>
    );
  }
}

export default SATWorkforceMarketplaceIndex;
