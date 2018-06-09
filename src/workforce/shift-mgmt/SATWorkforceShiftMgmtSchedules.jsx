import React from 'react';

import {
  Card,
  CardHeader,
  CardBody,
} from 'rv-unity-react';

export const SATWorkforceShiftMgmtSchedules = () => (
  <Card
    collapsible={true}
    visible={true}
  >
    <CardHeader
      onPress={() => undefined}
    >
      Schedule Change
    </CardHeader>
    <CardBody>
      Schedule Table
    </CardBody>
  </Card>
)

export default SATWorkforceShiftMgmtSchedules;
