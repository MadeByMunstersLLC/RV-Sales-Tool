import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import WorkforceMarketplaceOvertime from 'workforce/marketplace/overtime/WorkforceMarketplaceOvertime';
import WorkforceMarketplaceShiftSwap from 'workforce/marketplace/shift-swap/WorkforceMarketplaceShiftSwap';
import WorkforceMarketplaceTimeoff from 'workforce/marketplace/timeoff/WorkforceMarketplaceTimeoff';
import { Tabs, Tab } from 'shared/tabs/';

import cardTabstyles from 'css/components/card-tabs.module.css';

class WorkforceMarketplaceIndex extends Component {

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
            component={WorkforceMarketplaceTimeoff}
          />
          <Route
            path="/workforce/marketplace/overtime"
            component={WorkforceMarketplaceOvertime}
          />
          <Route
            path="/workforce/marketplace/shift_swap"
            component={WorkforceMarketplaceShiftSwap}
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

export default WorkforceMarketplaceIndex;
