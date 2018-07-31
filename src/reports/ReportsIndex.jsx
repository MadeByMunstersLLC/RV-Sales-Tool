import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import PageBlankState from 'shared/layout/PageBlankState';
import PageContent from 'shared/layout/PageContent';
import PageHeader from 'shared/layout/PageHeader';
import { Tabs, Tab } from 'shared/tabs/';

class ReportsIndex extends Component {

  render() {

    return (
      <Fragment>
        <PageHeader
          pageTitleLeft="Reports"
          pageTitleIconLeft="assessment"
        />
        <Tabs tabsPageHeader="true">
          <Tab
            tabText="Compensation"
            tabUrl="/reports/compensation"
          />
          <Tab
            tabText="Performance"
            tabUrl="/reports/performance"
          />
          <Tab
            tabText="Agent Details"
            tabUrl="/reports/agent_details"
          />
        </Tabs>
        <PageContent
          pageContentTabs={true}
        >
          <Switch>
            <Route
              exact
              path="/reports">
              <Redirect to="/reports/compensation"
            />
            </Route>
            <Route
              path="/reports/compensation"
              render={ () =>
                <PageBlankState
                  blankStateIcon="assessment"
                  blankStateText="Compensation Report"
                />
              }
            />
            <Route
              path="/reports/performance"
              render={ () =>
                <PageBlankState
                  blankStateIcon="assessment"
                  blankStateText="Performance Report"
                />
              }
            />
            <Route
              path="/reports/agent_details"
              render={ () =>
                <PageBlankState
                  blankStateIcon="assessment"
                  blankStateText="Agent Details Report"
                />
              }
            />
          </Switch>
        </PageContent>
      </Fragment>
    );
  }
}

export default ReportsIndex;
