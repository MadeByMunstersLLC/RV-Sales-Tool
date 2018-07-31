import React from 'react';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
} from 'rv-unity-react';

// TODO:
  // • Wireup and remove hardcoded values

export const WorkforceMarketplaceOverviewPendingCard = () => (
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
      <div className="tables__unity-table">
        <ul className="tables__unity-table__header">
          <li>Submitted By</li>
          <li>Proposed Trade</li>
          <li>Your Request</li>
          <li></li>
        </ul>
        <div className="tables__unity-table__body">
          <ul className="tables__unity-table__row">
            <li className="tables__unity-table__cell">Glenn Wallace</li>
            <li className="tables__unity-table__cell">04/02/2018 from 8:00 am - 5:00 pm</li>
            <li className="tables__unity-table__cell">03/29/2018 from 8:00 am - 5:00 pm</li>
            <li className="tables__unity-table__cell">
              <div className="helpers__unity-h--float-right">
                <Button
                  label="Reject"
                  onPress={() => undefined}
                  ghost
                  type={1}
                  size={2}
                />
                <Button
                  label="Accept"
                  onPress={() => undefined}
                  size={2}
                />
              </div>
            </li>
          </ul>
          <ul className="tables__unity-table__row">
            <li className="tables__unity-table__cell">Betty Clarke</li>
            <li className="tables__unity-table__cell">04/02/2018 from 8:00 am - 5:00 pm</li>
            <li className="tables__unity-table__cell">03/29/2018 from 8:00 am - 5:00 pm</li>
            <li className="tables__unity-table__cell">
              <div className="helpers__unity-h--float-right">
                <Button
                  label="Reject"
                  onPress={() => undefined}
                  ghost
                  type={1}
                  size={2}
                />
                <Button
                  label="Accept"
                  onPress={() => undefined}
                  size={2}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </CardBody>
  </Card>
)

export default WorkforceMarketplaceOverviewPendingCard;
