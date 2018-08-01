import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import SupportShow from './SupportShow';
import SupportSection from './shared/SupportSection';

import PageContent from '../shared/layout/PageContent';
import PageHeader from '../shared/layout/PageHeader';

class SupportIndex extends Component {

  render() {

    return (
      <Fragment>
        <PageHeader
          pageTitleLeft="Support Documents"
          pageTitleIconLeft="folder"
        />
        <PageContent
          pageContentScroll={true}
        >
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
              render={() =>
                <SupportSection
                  categories={mockSupportCategories}
                  posts={mockSupportItems}
                />
              }
            />
            <Route
              path="/support/:id"
              render={ (props) =>
                <SupportShow
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

export default SupportIndex;

const mockSupportCategories = [
  {
    id: '0',
    title: 'Support A'
  },
  {
    id: '1',
    title: 'Support B'
  },
  {
    id: '2',
    title: 'Support C'
  }
]

const mockSupportItems = [
  {
    id: '0',
    created_on: '05/15/2018',
    updated_on: '05/15/2018',
    category: 'Support A',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur orci erat, vel scelerisque velit blandit vitae. Nam mi tellus, aliquam ut sapien et, bibendum consequat turpis. Maecenas malesuada enim id dolor scelerisque condimentum. Cras sed dictum mauris. Mauris ut finibus massa, nec porttitor neque. Sed sodales, sem nec vehicula congue, elit lacus condimentum quam, et placerat turpis neque et sem. Mauris sit amet risus nec massa viverra congue non ultrices turpis. Phasellus in ligula ante. Integer et vulputate erat, ut fringilla dui. Aenean venenatis cursus consectetur. Mauris ut metus ut sapien pulvinar interdum. Phasellus fringilla accumsan libero. Nam venenatis ante a dui facilisis lacinia at eget nunc. \n \nLorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur orci erat, vel scelerisque velit blandit vitae. Nam mi tellus, aliquam ut sapien et, bibendum consequat turpis. Maecenas malesuada enim id dolor scelerisque condimentum. Cras sed dictum mauris. Mauris ut finibus massa, nec porttitor neque. Sed sodales, sem nec vehicula congue, elit lacus condimentum quam, et placerat turpis neque et sem. Mauris sit amet risus nec massa viverra congue non ultrices turpis. Phasellus in ligula ante. Integer et vulputate erat, ut fringilla dui. Aenean venenatis cursus consectetur. Mauris ut metus ut sapien pulvinar interdum. Phasellus fringilla accumsan libero. Nam venenatis ante a dui facilisis lacinia at eget nunc.\n \nLorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur orci erat, vel scelerisque velit blandit vitae. Nam mi tellus, aliquam ut sapien et, bibendum consequat turpis. Maecenas malesuada enim id dolor scelerisque condimentum. Cras sed dictum mauris. Mauris ut finibus massa, nec porttitor neque. Sed sodales, sem nec vehicula congue, elit lacus condimentum quam, et placerat turpis neque et sem. Mauris sit amet risus nec massa viverra congue non ultrices turpis. Phasellus in ligula ante. Integer et vulputate erat, ut fringilla dui. Aenean venenatis cursus consectetur. Mauris ut metus ut sapien pulvinar interdum. Phasellus fringilla accumsan libero. Nam venenatis ante a dui facilisis lacinia at eget nunc',
    attachment: 'compensation_updates.pdf'
  },
  {
    id: '1',
    created_on: '05/15/2018',
    updated_on: '05/15/2018',
    category: 'Support A',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur orci erat, vel scelerisque velit blandit vitae. Nam mi tellus, aliquam ut sapien et, bibendum consequat turpis. Maecenas malesuada enim id dolor scelerisque condimentum. Cras sed dictum mauris. Mauris ut finibus massa, nec porttitor neque. Sed sodales, sem nec vehicula congue, elit lacus condimentum quam, et placerat turpis neque et sem. Mauris sit amet risus nec massa viverra congue non ultrices turpis. Phasellus in ligula ante. Integer et vulputate erat, ut fringilla dui. Aenean venenatis cursus consectetur. Mauris ut metus ut sapien pulvinar interdum. Phasellus fringilla accumsan libero. Nam venenatis ante a dui facilisis lacinia at eget nunc.',
    attachment: null,
  },
  {
    id: '2',
    created_on: '05/15/2018',
    updated_on: '05/15/2018',
    category: '',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur orci erat, vel scelerisque velit blandit vitae. Nam mi tellus, aliquam ut sapien et, bibendum consequat turpis. Maecenas malesuada enim id dolor scelerisque condimentum. Cras sed dictum mauris. Mauris ut finibus massa, nec porttitor neque. Sed sodales, sem nec vehicula congue, elit lacus condimentum quam, et placerat turpis neque et sem. Mauris sit amet risus nec massa viverra congue non ultrices turpis. Phasellus in ligula ante. Integer et vulputate erat, ut fringilla dui. Aenean venenatis cursus consectetur. Mauris ut metus ut sapien pulvinar interdum. Phasellus fringilla accumsan libero. Nam venenatis ante a dui facilisis lacinia at eget nunc.',

  },
  {
    id: '3',
    created_on: '05/15/2018',
    updated_on: '05/15/2018',
    category: 'Support B',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 4',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur orci erat, vel scelerisque velit blandit vitae. Nam mi tellus, aliquam ut sapien et, bibendum consequat turpis. Maecenas malesuada enim id dolor scelerisque condimentum. Cras sed dictum mauris. Mauris ut finibus massa, nec porttitor neque. Sed sodales, sem nec vehicula congue, elit lacus condimentum quam, et placerat turpis neque et sem. Mauris sit amet risus nec massa viverra congue non ultrices turpis. Phasellus in ligula ante. Integer et vulputate erat, ut fringilla dui. Aenean venenatis cursus consectetur. Mauris ut metus ut sapien pulvinar interdum. Phasellus fringilla accumsan libero. Nam venenatis ante a dui facilisis lacinia at eget nunc.',
    attachment: null,
  },
  {
    id: '4',
    created_on: '05/15/2018',
    updated_on: '05/19/2018',
    category: 'Support C',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 5',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur orci erat, vel scelerisque velit blandit vitae. Nam mi tellus, aliquam ut sapien et, bibendum consequat turpis. Maecenas malesuada enim id dolor scelerisque condimentum. Cras sed dictum mauris. Mauris ut finibus massa, nec porttitor neque. Sed sodales, sem nec vehicula congue, elit lacus condimentum quam, et placerat turpis neque et sem. Mauris sit amet risus nec massa viverra congue non ultrices turpis. Phasellus in ligula ante. Integer et vulputate erat, ut fringilla dui. Aenean venenatis cursus consectetur. Mauris ut metus ut sapien pulvinar interdum. Phasellus fringilla accumsan libero. Nam venenatis ante a dui facilisis lacinia at eget nunc.',
    attachment: null,
  },
  {
    id: '5',
    created_on: '05/15/2018',
    updated_on: '05/19/2018',
    category: 'Support A',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 5',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur orci erat, vel scelerisque velit blandit vitae. Nam mi tellus, aliquam ut sapien et, bibendum consequat turpis. Maecenas malesuada enim id dolor scelerisque condimentum. Cras sed dictum mauris. Mauris ut finibus massa, nec porttitor neque. Sed sodales, sem nec vehicula congue, elit lacus condimentum quam, et placerat turpis neque et sem. Mauris sit amet risus nec massa viverra congue non ultrices turpis. Phasellus in ligula ante. Integer et vulputate erat, ut fringilla dui. Aenean venenatis cursus consectetur. Mauris ut metus ut sapien pulvinar interdum. Phasellus fringilla accumsan libero. Nam venenatis ante a dui facilisis lacinia at eget nunc.',
    attachment: null,
  },
]
