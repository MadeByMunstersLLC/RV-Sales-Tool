import React, { Component, Fragment } from 'react';

import PageContent from '../shared/layout/PageContent.jsx';
import PageHeader from '../shared/layout/PageHeader.jsx';

class SATDashboardIndex extends Component {
  render() {

    return (
      <Fragment>
        <PageHeader
          pageTitleLeft="Dashboard"
          pageTitleIconLeft="dashboard"
          pageTitleIconRight="apps" />
        <PageContent>
          <h1>Dashboard</h1>
        </PageContent>
      </Fragment>
    );
  }
}

export default SATDashboardIndex;
