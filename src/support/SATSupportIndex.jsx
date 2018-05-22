import React, { Component, Fragment } from 'react';
import { NavLink, Route, Redirect, Switch } from "react-router-dom";

import PageContent from 'shared/layout/PageContent';
import PageHeader from 'shared/layout/PageHeader';
import SATSupportShow from './SATSupportShow';

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
                        to={`/support/${item.id}`}
                      >
                        <p>{item.title}</p>
                      </NavLink>
                    </li>
                  )}
                </ul>
              }
            />
            <Route
              path="/support/:id"
              render={ (props) =>
                <SATSupportShow
                  data={mockSupportItems}
                  {...props}
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
    id: '0',
    created_on: '',
    updated_last: '',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1',
    body: '',
    category: '',

  },
  {
    id: '1',
    created_on: '',
    updated_last: '',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2',
    body: '',
    category: '',

  },
  {
    id: '2',
    created_on: '',
    updated_last: '',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3',
    body: '',
    category: '',

  },
  {
    id: '3',
    created_on: '',
    updated_last: '',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 4',
    body: '',
    category: '',

  },
  {
    id: '4',
    created_on: '',
    updated_last: '',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 5',
    body: '',
    category: '',

  },
]
