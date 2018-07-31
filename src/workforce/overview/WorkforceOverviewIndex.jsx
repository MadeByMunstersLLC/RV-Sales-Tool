import React, { Component, Fragment } from 'react';

import WorkforceMarketplaceOverviewPendingCard from 'workforce/overview/WorkforceMarketplaceOverviewPendingCard';
import WorkforceMarketplaceOverviewRequestsCard from 'workforce/overview/WorkforceMarketplaceOverviewRequestsCard';

class WorkforceOverviewIndex extends Component {

  render() {

    return (
      <Fragment>
        <WorkforceMarketplaceOverviewRequestsCard />
        <WorkforceMarketplaceOverviewPendingCard />
      </Fragment>
    );
  }
}

export default WorkforceOverviewIndex;
