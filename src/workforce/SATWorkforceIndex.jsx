import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import PageBlankState from 'shared/layout/PageBlankState';
import PageContent from 'shared/layout/PageContent';
import PageHeader from 'shared/layout/PageHeader';
import { Tabs, Tab } from 'shared/tabs/';

class SATMarketplaceIndex extends Component {

  render() {

    return (
      <Fragment>
        <PageHeader
          pageTitleLeft="Workforce"
          pageTitleIconLeft="assignment"
        />
        <Tabs tabsPageHeader="true">
          <Tab
            tabText="Overview"
            tabUrl="/workforce/overview" />
          <Tab
            tabText="Marketplaces"
            tabUrl="/workforce/marketplaces" />
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
              path="/workforce"
              render={ () =>
                <PageBlankState
                  blankStateIcon="date"
                  blankStateText="Timeoff"
                />
              }
            />
            <Route
              path="/workforc/marketplaces"
              render={ () =>
                <PageBlankState
                  blankStateIcon="assignment"
                  blankStateText="Marketplaces"
                />
              }
            />
          </Switch>
        </PageContent>
      </Fragment>
    );
  }
}

export default SATMarketplaceIndex;
