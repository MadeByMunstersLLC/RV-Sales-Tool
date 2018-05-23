import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import PageBlankState from 'shared/layout/PageBlankState';
import PageContent from 'shared/layout/PageContent';
import PageHeader from 'shared/layout/PageHeader';

class SATMarketplaceIndex extends Component {

  render() {

    return (
      <Fragment>
        <PageHeader
          pageTitleLeft="Marketplace"
          pageTitleIconLeft="assignment"
        />
        <PageContent
          pageContentTabs="true">
          <Switch>
            <Route
              exact
              path="/marketplace">
              <Redirect to="/marketplace/timeoff" />
            </Route>
            <Route
              path="/marketplace/timeoff"
              render={ () =>
                <PageBlankState
                  blankStateIcon="date"
                  blankStateText="Timeoff"
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
