import React, { Component, Fragment } from 'react';

import dashboardStyles from '../css/pages/dashboard.module.css';

import SATDashboardItem from './SATDashboardItem.jsx';
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
          <div className={`${dashboardStyles.list}`}>
            <SATDashboardItem dashboardItemSize="md">
              <p>Dashboard Widget 2</p>
            </SATDashboardItem>
            <SATDashboardItem>
              <p>Dashboard Widget 1</p>
            </SATDashboardItem>
            <SATDashboardItem>
              <p>Dashboard Widget 5</p>
            </SATDashboardItem>
            <SATDashboardItem>
              <p>Dashboard Widget 3</p>
            </SATDashboardItem>
            <SATDashboardItem>
              <p>Dashboard Widget 4</p>
            </SATDashboardItem>
          </div>
        </PageContent>
      </Fragment>
    );
  }
}

export default SATDashboardIndex;
