import React, { Component, Fragment } from 'react';

import SATWorkforceMarketplaceOverviewPendingCard from 'workforce/overview/SATWorkforceMarketplaceOverviewPendingCard';
import SATWorkforceMarketplaceOverviewRequestsCard from 'workforce/overview/SATWorkforceMarketplaceOverviewRequestsCard';

class SATWorkforceOverviewIndex extends Component {

  render() {

    return (
      <Fragment>
        <SATWorkforceMarketplaceOverviewRequestsCard />
        <SATWorkforceMarketplaceOverviewPendingCard />
      </Fragment>
    );
  }
}

export default SATWorkforceOverviewIndex;
