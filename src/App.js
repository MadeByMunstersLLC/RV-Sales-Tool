import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import layout from 'css/global/layout.module.css';

import {
  SidebarNavigation,
  SidebarNavigationList,
  SidebarNavigationLink,
  SidebarNavigationToggleLink,
  SidebarNavigationSubmenuLink } from 'shared/layout/sidebar-navigation';
import SATAgentProfileIndex from 'profile/SATAgentProfileIndex';
import SATCalendarIndex from 'calendar/SATCalendarIndex';
import SATDashboardIndex from 'dashboard/SATDashboardIndex';
import SATMessagesIndex from 'messages/SATMessagesIndex';
import SATReportsIndex from 'reports/SATReportsIndex';
import SATSupportIndex from 'support/SATSupportIndex';
import SATWorkforceIndex from 'workforce/SATWorkforceIndex';
import TopbarNavigation from 'shared/layout/TopbarNavigation';

const App = () => (
  <Router>
    <Fragment>
      <SidebarNavigation
        sidebarHeaderTitle="Sales Tool"
      >
        {({isSidebarExpanded, updateSidebarState}) => (
          <SidebarNavigationList>
            <SidebarNavigationLink
              sidebarNavLinkText="Dashboard"
              sidebarNavLinkUrl="/dashboard"
              sidebarNavLinkIcon="dashboard"
            />
            <SidebarNavigationLink
              sidebarNavLinkText="Messages"
              sidebarNavLinkUrl="/messages"
              sidebarNavLinkIcon="mail"
            />
            <SidebarNavigationLink
              sidebarNavLinkText="Calendar"
              sidebarNavLinkUrl="/calendar"
              sidebarNavLinkIcon="event"
            />
            <SidebarNavigationLink
              sidebarNavLinkText="Reports"
              sidebarNavLinkUrl="/reports"
              sidebarNavLinkIcon="assessment"
            />
            <SidebarNavigationLink
              sidebarNavLinkText="Support Documents"
              sidebarNavLinkUrl="/support"
              sidebarNavLinkIcon="folder"
            />
            <SidebarNavigationLink
              sidebarNavLinkText="Workforce"
              sidebarNavLinkUrl="/workforce"
              sidebarNavLinkIcon="assignment"
            />
            <SidebarNavigationLink
              sidebarNavLinkText="Agent Profile"
              sidebarNavLinkUrl="/agent_profile"
              sidebarNavLinkIcon="headset_mic"
            />
            <SidebarNavigationToggleLink
              sidebarNavLinkText="Additional Resources"
              sidebarNavLinkIcon="info"
              isSidebarExpanded={isSidebarExpanded}
              updateSidebarState={updateSidebarState}
            >
              <SidebarNavigationSubmenuLink
                submenuLinkText="Workday"
                submenuLinkUrl="http://google.com "
              />
              <SidebarNavigationSubmenuLink
                submenuLinkText="Reactor"
                submenuLinkUrl="http://google.com "
              />
              <SidebarNavigationSubmenuLink
                submenuLinkText="Employee Profile"
                submenuLinkUrl="http://google.com "
              />
              <SidebarNavigationSubmenuLink
                submenuLinkText="RV System Status"
                submenuLinkUrl="http://google.com "
              />
              <SidebarNavigationSubmenuLink
                submenuLinkText="Points of Contact"
                submenuLinkUrl="http://google.com "
              />
            </SidebarNavigationToggleLink>
          </SidebarNavigationList>
        )}
      </SidebarNavigation>
      <TopbarNavigation
        items={mockNotificationItems}
      />
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
            path="/messages"
            component={SATMessagesIndex} />
          <Route
            path="/calendar"
            component={SATCalendarIndex} />
          <Route
            path="/reports"
            component={SATReportsIndex} />
          <Route
            path="/support"
            component={SATSupportIndex} />
          <Route
            path="/workforce"
            component={SATWorkforceIndex} />
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
    unread: true,
    route: '/messages/mail/1'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
    description: 'Proin lorem sapien, tempus ullamcorper eget …',
    unread: false,
    route: '/messages/broadcasts/1'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
    description: 'Proin lorem sapien, tempus ullamcorper eget …',
    unread: false,
    route: '/messages/mail/3'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
    description: 'Proin lorem sapien, tempus ullamcorper eget …',
    unread: false,
    route: '/messages/mail/2'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
    description: 'Maximus ut odio. Fusce ac varius leo.',
    unread: false,
    route: '/messages/broadcasts/2'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
    description: 'Celerisque nec sapien. Donec ex lorem …',
    unread: false,
    route: '/messages/broadcasts/3'
  }
];
