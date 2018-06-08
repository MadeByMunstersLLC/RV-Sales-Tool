import React from 'react';

import {
  Card,
  CardHeader,
  CardBody,
} from 'rv-unity-react';

export const SATWorkforceMarketplaceOverviewRequestsCard = () => (
  <Card
    collapsible={true}
    visible={true}
  >
    <CardHeader
      onPress={() => undefined}
    >
      MarketPlace Requests
    </CardHeader>
    <CardHeader>
      Timeoff
    </CardHeader>
    <CardBody>
      Timeoff Table
    </CardBody>
    <CardHeader>
      Shift Swap
    </CardHeader>
    <CardBody>
      Shift Swap Table
    </CardBody>
    <CardHeader>
      Overtime
    </CardHeader>
    <CardBody>
      Overtime Table
    </CardBody>
  </Card>
)

export default SATWorkforceMarketplaceOverviewRequestsCard;
