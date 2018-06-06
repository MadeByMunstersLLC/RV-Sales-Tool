import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import PageContent from 'shared/layout/PageContent';
import PageHeader from 'shared/layout/PageHeader';
import SATSupportShow from './SATSupportShow';
import SATSupportSection from './SATSupportSection';

// Unity Components
import { Card } from 'rv-unity-react';

// Unity Styles
import 'rv-unity/src/css/base/variables.css';
import 'rv-unity/src/css/components/cards.css';

class SATSupportIndex extends Component {

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
                <Card>
                  <SATSupportSection
                    categories={mockSupportCategories}
                    posts={mockSupportItems}
                  />
                </Card>
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
    updated_last: '05/15/2018',
    category: 'Support A',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur orci erat, vel scelerisque velit blandit vitae. Nam mi tellus, aliquam ut sapien et, bibendum consequat turpis. Maecenas malesuada enim id dolor scelerisque condimentum. Cras sed dictum mauris. Mauris ut finibus massa, nec porttitor neque. Sed sodales, sem nec vehicula congue, elit lacus condimentum quam, et placerat turpis neque et sem. Mauris sit amet risus nec massa viverra congue non ultrices turpis. Phasellus in ligula ante. Integer et vulputate erat, ut fringilla dui. Aenean venenatis cursus consectetur. Mauris ut metus ut sapien pulvinar interdum. Phasellus fringilla accumsan libero. Nam venenatis ante a dui facilisis lacinia at eget nunc. \n \nLorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur orci erat, vel scelerisque velit blandit vitae. Nam mi tellus, aliquam ut sapien et, bibendum consequat turpis. Maecenas malesuada enim id dolor scelerisque condimentum. Cras sed dictum mauris. Mauris ut finibus massa, nec porttitor neque. Sed sodales, sem nec vehicula congue, elit lacus condimentum quam, et placerat turpis neque et sem. Mauris sit amet risus nec massa viverra congue non ultrices turpis. Phasellus in ligula ante. Integer et vulputate erat, ut fringilla dui. Aenean venenatis cursus consectetur. Mauris ut metus ut sapien pulvinar interdum. Phasellus fringilla accumsan libero. Nam venenatis ante a dui facilisis lacinia at eget nunc.\n \nLorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur orci erat, vel scelerisque velit blandit vitae. Nam mi tellus, aliquam ut sapien et, bibendum consequat turpis. Maecenas malesuada enim id dolor scelerisque condimentum. Cras sed dictum mauris. Mauris ut finibus massa, nec porttitor neque. Sed sodales, sem nec vehicula congue, elit lacus condimentum quam, et placerat turpis neque et sem. Mauris sit amet risus nec massa viverra congue non ultrices turpis. Phasellus in ligula ante. Integer et vulputate erat, ut fringilla dui. Aenean venenatis cursus consectetur. Mauris ut metus ut sapien pulvinar interdum. Phasellus fringilla accumsan libero. Nam venenatis ante a dui facilisis lacinia at eget nunc',
    attachment: 'compensation_updates.pdf'
  },
  {
    id: '1',
    created_on: '05/15/2018',
    updated_last: '05/15/2018',
    category: 'Support A',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur orci erat, vel scelerisque velit blandit vitae. Nam mi tellus, aliquam ut sapien et, bibendum consequat turpis. Maecenas malesuada enim id dolor scelerisque condimentum. Cras sed dictum mauris. Mauris ut finibus massa, nec porttitor neque. Sed sodales, sem nec vehicula congue, elit lacus condimentum quam, et placerat turpis neque et sem. Mauris sit amet risus nec massa viverra congue non ultrices turpis. Phasellus in ligula ante. Integer et vulputate erat, ut fringilla dui. Aenean venenatis cursus consectetur. Mauris ut metus ut sapien pulvinar interdum. Phasellus fringilla accumsan libero. Nam venenatis ante a dui facilisis lacinia at eget nunc.',
    attachment: null,
  },
  {
    id: '2',
    created_on: '05/15/2018',
    updated_last: '05/15/2018',
    category: '',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur orci erat, vel scelerisque velit blandit vitae. Nam mi tellus, aliquam ut sapien et, bibendum consequat turpis. Maecenas malesuada enim id dolor scelerisque condimentum. Cras sed dictum mauris. Mauris ut finibus massa, nec porttitor neque. Sed sodales, sem nec vehicula congue, elit lacus condimentum quam, et placerat turpis neque et sem. Mauris sit amet risus nec massa viverra congue non ultrices turpis. Phasellus in ligula ante. Integer et vulputate erat, ut fringilla dui. Aenean venenatis cursus consectetur. Mauris ut metus ut sapien pulvinar interdum. Phasellus fringilla accumsan libero. Nam venenatis ante a dui facilisis lacinia at eget nunc.',

  },
  {
    id: '3',
    created_on: '05/15/2018',
    updated_last: '05/15/2018',
    category: 'Support B',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 4',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur orci erat, vel scelerisque velit blandit vitae. Nam mi tellus, aliquam ut sapien et, bibendum consequat turpis. Maecenas malesuada enim id dolor scelerisque condimentum. Cras sed dictum mauris. Mauris ut finibus massa, nec porttitor neque. Sed sodales, sem nec vehicula congue, elit lacus condimentum quam, et placerat turpis neque et sem. Mauris sit amet risus nec massa viverra congue non ultrices turpis. Phasellus in ligula ante. Integer et vulputate erat, ut fringilla dui. Aenean venenatis cursus consectetur. Mauris ut metus ut sapien pulvinar interdum. Phasellus fringilla accumsan libero. Nam venenatis ante a dui facilisis lacinia at eget nunc.',
    attachment: null,
  },
  {
    id: '4',
    created_on: '05/15/2018',
    updated_last: '05/15/2018',
    category: 'Support C',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 5',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur orci erat, vel scelerisque velit blandit vitae. Nam mi tellus, aliquam ut sapien et, bibendum consequat turpis. Maecenas malesuada enim id dolor scelerisque condimentum. Cras sed dictum mauris. Mauris ut finibus massa, nec porttitor neque. Sed sodales, sem nec vehicula congue, elit lacus condimentum quam, et placerat turpis neque et sem. Mauris sit amet risus nec massa viverra congue non ultrices turpis. Phasellus in ligula ante. Integer et vulputate erat, ut fringilla dui. Aenean venenatis cursus consectetur. Mauris ut metus ut sapien pulvinar interdum. Phasellus fringilla accumsan libero. Nam venenatis ante a dui facilisis lacinia at eget nunc.',
    attachment: null,
  },
]
