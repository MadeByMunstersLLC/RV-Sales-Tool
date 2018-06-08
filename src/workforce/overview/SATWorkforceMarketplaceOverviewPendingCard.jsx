import React from 'react';

import {
  Card,
  CardHeader,
  CardBody,
} from 'rv-unity-react';

export const SATWorkforceMarketplaceOverviewPendingCard = () => (
  <Card
    collapsible={true}
    visible={true}
  >
    <CardHeader
      onPress={() => undefined}
    >
      Pending Shift Swap Proposals
    </CardHeader>
    <CardBody>
      Proposals Table
    </CardBody>
  </Card>
)

export default SATWorkforceMarketplaceOverviewPendingCard;
