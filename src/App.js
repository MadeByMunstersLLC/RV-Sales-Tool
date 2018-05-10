import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import layout from './css/global/layout.module.css';

import {
  SidebarNavigation,
  SidebarNavigationFooter,
  SidebarNavigationHeader,
  SidebarNavigationList,
  SidebarNavigationLink,
  SidebarNavigationToggleLink,
  SidebarNavigationSubmenuLink } from './shared/layout/sidebar-navigation';
import SATDashboardIndex from './dashboard/SATDashboardIndex';
import SATAgentProfileIndex from './profile/SATAgentProfileIndex';
import TopbarNavigation from './shared/layout/TopbarNavigation';

const App = () => (
  <Router>
    <Fragment>
      <SidebarNavigation>
        <SidebarNavigationHeader
          sidebarNavTitle="Sales Tool" />
        <SidebarNavigationList>
          <SidebarNavigationLink
            sidebarNavLinkText="Dashboard"
            sidebarNavLinkUrl="/dashboard"
            sidebarNavLinkIcon="dashboard" />
          <SidebarNavigationLink
            sidebarNavLinkText="Messages"
            sidebarNavLinkUrl="/messages"
            sidebarNavLinkIcon="mail" />
          <SidebarNavigationLink
            sidebarNavLinkText="Calendar"
            sidebarNavLinkUrl="/calendar"
            sidebarNavLinkIcon="event" />
          <SidebarNavigationLink
            sidebarNavLinkText="Reports"
            sidebarNavLinkUrl="/reports"
            sidebarNavLinkIcon="assessment" />
          <SidebarNavigationLink
            sidebarNavLinkText="Support Documents"
            sidebarNavLinkUrl="/support_documents"
            sidebarNavLinkIcon="folder" />
          <SidebarNavigationLink
            sidebarNavLinkText="Agent Profile"
            sidebarNavLinkUrl="/agent_profile"
            sidebarNavLinkIcon="headset_mic" />
          <SidebarNavigationToggleLink
            sidebarNavLinkText="Additional Resources"
            sidebarNavLinkIcon="info">
            <SidebarNavigationSubmenuLink
              submenuLinkText="Workday"
              submenuLinkUrl="http://google.com "/>
            <SidebarNavigationSubmenuLink
              submenuLinkText="Reactor"
              submenuLinkUrl="http://google.com "/>
            <SidebarNavigationSubmenuLink
              submenuLinkText="Employee Profile"
              submenuLinkUrl="http://google.com "/>
            <SidebarNavigationSubmenuLink
              submenuLinkText="RV System Status"
              submenuLinkUrl="http://google.com "/>
            <SidebarNavigationSubmenuLink
              submenuLinkText="Points of Contact"
              submenuLinkUrl="http://google.com "/>
          </SidebarNavigationToggleLink>
        </SidebarNavigationList>
        <SidebarNavigationFooter />
      </SidebarNavigation>
      <TopbarNavigation items={mockNotificationItems} />
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

const mockNotificationItems = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
    description: 'Proin lorem sapien, tempus ullamcorper eget …',
    unread: true
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
    description: 'Proin lorem sapien, tempus ullamcorper eget …',
    unread: false
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
    description: 'Proin lorem sapien, tempus ullamcorper eget …',
    unread: false
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
    description: 'Proin lorem sapien, tempus ullamcorper eget …',
    unread: false
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
    description: 'Maximus ut odio. Fusce ac varius leo.',
    unread: false
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
    description: 'Celerisque nec sapien. Donec ex lorem …',
    unread: false
  }
];
