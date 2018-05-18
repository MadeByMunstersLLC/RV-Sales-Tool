import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import PageBlankState from 'shared/layout/PageBlankState';
import PageContent from 'shared/layout/PageContent';
import PageHeader from 'shared/layout/PageHeader';

class SATSupportIndex extends Component {

  render() {

    return (
      <Fragment>
        <PageHeader
          pageTitleLeft="Support Documents"
          pageTitleIconLeft="folder"
          />
        <PageContent
          pageContentTabs="true">
          <Switch>
            <Route
              exact
              path="/reports">
              <Redirect
                to="/support_documents"
              />
            </Route>
            <Route
              path="/support_documents/all"
              render={ () =>
                <PageBlankState
                  blankStateIcon="assessment"
                  blankStateText="Compensation Report"
                />
              }
            />
            <Route
              path="/support_documents/:id"
              render={ () =>
                <PageBlankState
                  blankStateIcon="assessment"
                  blankStateText="Performance Report"
                />
              }
            />
          </Switch>
        </PageContent>
      </Fragment>
    );
  }
}

export default SATSupportIndex;
