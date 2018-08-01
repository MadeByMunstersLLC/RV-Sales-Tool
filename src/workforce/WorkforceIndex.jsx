import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import PageContent from '../shared/layout/PageContent';
import PageHeader from '../shared/layout/PageHeader';
import WorkforceMarketplaceIndex from './marketplace/WorkforceMarketplaceIndex';
import WorkforceOverviewIndex from './overview/WorkforceOverviewIndex';
import WorkforceShiftMgmtIndex from './shift-mgmt/WorkforceShiftMgmtIndex';
import { Tabs, Tab } from '../shared/tabs/';

class MarketplaceIndex extends Component {

  render() {

    return (
      <Fragment>
        <PageHeader
          pageTitleLeft="Workforce"
          pageTitleIconLeft="assignment"
        />
        <Tabs
          tabsPageHeader={true}
        >
          <Tab
            tabText="Overview"
            tabUrl="/workforce/overview"
          />
          <Tab
            tabText="Marketplace"
            tabUrl="/workforce/marketplace"
          />
          <Tab
            tabText="Shift Management"
            tabUrl="/workforce/shift_management"
          />
        </Tabs>
        <PageContent
          pageContentTabs={true}
          pageContentScroll={true}
        >
          <Switch>
            <Route
              exact
              path="/workforce">
              <Redirect to="/workforce/overview"
            />
            </Route>
            <Route
              path="/workforce/overview"
              component={WorkforceOverviewIndex}
            />
            <Route
              path="/workforce/marketplace"
              component={WorkforceMarketplaceIndex}
            />
            <Route
              path="/workforce/shift_management"
              component={WorkforceShiftMgmtIndex}
            />
          </Switch>
        </PageContent>
      </Fragment>
    );
  }
}

export default MarketplaceIndex;
