import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import PageContent from 'shared/layout/PageContent';
import PageHeader from 'shared/layout/PageHeader';
import SATWorkforceMarketplaceIndex from 'workforce/marketplace/SATWorkforceMarketplaceIndex';
import SATWorkforceOverviewIndex from 'workforce/overview/SATWorkforceOverviewIndex';
import SATWorkforceShiftMgmtIndex from 'workforce/shift-mgmt/SATWorkforceShiftMgmtIndex';
import { Tabs, Tab } from 'shared/tabs/';

class SATMarketplaceIndex extends Component {

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
          pageContentTabs="true"
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
              component={SATWorkforceOverviewIndex}
            />
            <Route
              path="/workforce/marketplace"
              component={SATWorkforceMarketplaceIndex}
            />
            <Route
              path="/workforce/shift_management"
              component={SATWorkforceShiftMgmtIndex}
            />
          </Switch>
        </PageContent>
      </Fragment>
    );
  }
}

export default SATMarketplaceIndex;
