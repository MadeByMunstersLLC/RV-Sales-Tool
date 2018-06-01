import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import PageContent from 'shared/layout/PageContent';
import PageHeader from 'shared/layout/PageHeader';
import { Tabs, Tab } from 'shared/tabs/';

import SATBroadcastIndex from 'messages/broadcast/SATBroadcastIndex';
import SATMailIndex from 'messages/mail/SATMailIndex';

class SATMessagesIndex extends Component {

  render() {

    return (
      <Fragment>
        <PageHeader
          pageTitleLeft="Messages"
          pageTitleIconLeft="email" />
        <Tabs
          tabsPageHeader={true}
        >
          <Tab
            tabText="Messages"
            tabUrl="/messages/mail" />
          <Tab
            tabText="Broadcasts"
            tabUrl="/messages/broadcasts" />
        </Tabs>
        <PageContent
          pageContentTabs="true">
          <Switch>
            <Route
              exact
              path="/messages">
              <Redirect to="/messages/mail" />
            </Route>
            <Route
              path="/messages/mail"
              component={SATMailIndex} />
            <Route
              path="/messages/broadcasts"
              component={SATBroadcastIndex} />
            </Switch>
        </PageContent>
      </Fragment>
    );
  }
}

export default SATMessagesIndex;
