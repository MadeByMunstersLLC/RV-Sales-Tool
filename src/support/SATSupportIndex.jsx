import React, { Component, Fragment } from 'react';
import { NavLink, Route, Redirect, Switch } from "react-router-dom";

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
              path="/support">
              <Redirect
                to="/support/all"
              />
            </Route>
            <Route
              path="/support/all"
              render={ () =>
                <ul>
                  {mockSupportItems.map((item, index) =>
                    <li key={index}>
                      <NavLink
                        to={'/support/' + `${item.id}`}
                      >
                        {item.id}
                      </NavLink>
                    </li>
                  )}
                </ul>
              }
            />
            <Route
              path="/support/:id"
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

const mockSupportItems = [
  {
    id: 1,
    created_on: '',
    updated_last: '',
    title: '',
    body: '',
    category: '',

  },
  {
    id: 2,
    created_on: '',
    updated_last: '',
    title: '',
    body: '',
    category: '',

  },
  {
    id: 3,
    created_on: '',
    updated_last: '',
    title: '',
    body: '',
    category: '',

  },
  {
    id: 4,
    created_on: '',
    updated_last: '',
    title: '',
    body: '',
    category: '',

  },
  {
    id: 5,
    created_on: '',
    updated_last: '',
    title: '',
    body: '',
    category: '',

  },
]
