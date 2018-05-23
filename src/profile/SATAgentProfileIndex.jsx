import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import PageBlankState from 'shared/layout/PageBlankState';
import PageContent from 'shared/layout/PageContent';
import PageHeader from 'shared/layout/PageHeader';

class SATAgentProfileIndex extends Component {

  render() {

    return (
      <Fragment>
        <PageHeader
          pageTitleLeft="Agent Profile"
          pageTitleIconLeft="headset_mic"
        />
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
                  blankStateText="Agent Profile"
                />
              }
            />
            </Switch>
        </PageContent>
      </Fragment>
    );
  }
}

export default SATAgentProfileIndex;
