import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import PageBlankState from 'shared/layout/PageBlankState';
import PageContent from 'shared/layout/PageContent';
import PageHeader from 'shared/layout/PageHeader';
import { Tabs, Tab } from 'shared/tabs/';

class SATAgentProfileIndex extends Component {

  render() {

    return (
      <Fragment>
        <PageHeader
          pageTitleLeft="Agent Profile"
          pageTitleIconLeft="headset_mic"
        />
        <Tabs tabsPageHeader="true">
          <Tab
            tabText="Profile"
            tabUrl="/agent_profile/profile"
          />
          <Tab
            tabText="Timeoff"
            tabUrl="/agent_profile/timeoff"
          />
          <Tab
            tabText="Trade Shifts"
            tabUrl="/agent_profile/trade_shifts"
          />
          <Tab
            tabText="Overtime"
            tabUrl="/agent_profile/overtime"
          />
        </Tabs>
        <PageContent
          pageContentTabs="true">
          <Switch>
            <Route
              exact
              path="/agent_profile">
              <Redirect to="/agent_profile/profile" />
            </Route>
            <Route
              path="/agent_profile/profile"
              render={ () =>
                <PageBlankState
                  blankStateIcon="headset_mic"
                  blankStateText="Agent Profile" />
              }
            />
            <Route
              path="/agent_profile/timeoff"
              render={ () =>
                <PageBlankState
                  blankStateIcon="date_range"
                  blankStateText="Timeoff Calendar" />
              }
            />
            <Route
              path="/agent_profile/trade_shifts"
              render={ () =>
                <PageBlankState
                  blankStateIcon="people"
                  blankStateText="Trade Shifts" />
              }
            />
            <Route
              path="/agent_profile/overtime"
              render={ () =>
                <PageBlankState
                  blankStateIcon="date_range"
                  blankStateText="Overtime Calendar" />
              }
            />
            </Switch>
        </PageContent>
      </Fragment>
    );
  }
}

export default SATAgentProfileIndex;
