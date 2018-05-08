import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import layout from './css/global/layout.module.css';

import SidebarNavigation from './shared/layout/SidebarNavigation.jsx';
import SATDashboardIndex from './dashboard/SATDashboardIndex.jsx';
import SATAgentProfileIndex from './profile/SATAgentProfileIndex.jsx';
import TopbarNavigation from './shared/layout/TopbarNavigation.jsx';

const App = () => (
  <Router>
    <Fragment>
      <SidebarNavigation />
      <TopbarNavigation />
      <section className={`${layout.page__body}`}>
        <Switch>
          <Route
            exact
            path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route
            path="/dashboard"
            component={SATDashboardIndex} />
          <Route
            path="/agent_profile"
            component={SATAgentProfileIndex} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
