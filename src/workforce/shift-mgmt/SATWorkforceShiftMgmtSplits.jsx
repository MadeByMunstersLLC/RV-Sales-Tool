import React from 'react';

import {
  Card,
  CardHeader,
  CardBody,
} from 'rv-unity-react';

export const SATWorkforceShiftMgmtSplits = () => (
  <Card
    collapsible={true}
    visible={true}
  >
    <CardHeader
      onPress={() => undefined}
    >
      Split Shift
    </CardHeader>
    <CardBody>
      Splits Table
    </CardBody>
  </Card>
)

export default SATWorkforceShiftMgmtSplits;
