import React, { Component, Fragment } from 'react';

import WorkforceMarketplaceOverviewPendingCard from './WorkforceMarketplaceOverviewPendingCard';
import WorkforceMarketplaceOverviewRequestsCard from './WorkforceMarketplaceOverviewRequestsCard';

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
