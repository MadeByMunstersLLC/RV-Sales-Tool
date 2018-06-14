import React from 'react';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
} from 'rv-unity-react';

// TODO:
  // • Wireup and remove hardcoded values
  // • Key should be update to an unique id not index per React Docs.

export const SATWorkforceShiftMgmtSplits = ({
    modalToggle,
  }) => (
    <Card
      collapsible={true}
      visible={true}
    >
      <CardHeader
        onPress={() => undefined}
      >
        Split Shift
      </CardHeader>
      <CardHeader>
        Requested Splits
      </CardHeader>
      <CardBody>
        <div className="tables__unity-table">
          <ul className="tables__unity-table__header">
            <li>Date</li>
            <li>Start Time</li>
            <li>End Time</li>
            <li></li>
          </ul>
          <div className="tables__unity-table__body">
            {mockSelectedSplitsData.map((item, index) =>
              <ul
                className="tables__unity-table__row"
                key={index}
              >
                <li className="tables__unity-table__cell">{item.date}</li>
                <li className="tables__unity-table__cell">{item.start}</li>
                <li className="tables__unity-table__cell">{item.end}</li>
                <li className="tables__unity-table__cell">
                  <div className="helpers__unity-h--float-right">
                    <Button
                      label="Edit"
                      ghost
                      size={2}
                      onPress={() => modalToggle()}
                    />
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      </CardBody>
      <CardHeader>
        Available Splits
      </CardHeader>
      <CardBody>
        <div className="tables__unity-table">
          <ul className="tables__unity-table__header">
            <li>Date</li>
            <li>Start Time</li>
            <li>End Time</li>
            <li></li>
          </ul>
          <div className="tables__unity-table__body">
            {mockSplitsData.map((item, index) =>
              <ul
                className="tables__unity-table__row"
                key={index}
              >
                <li className="tables__unity-table__cell">{item.date}</li>
                <li className="tables__unity-table__cell">{item.start}</li>
                <li className="tables__unity-table__cell">{item.end}</li>
                <li className="tables__unity-table__cell">
                  <div className="helpers__unity-h--float-right">
                    <Button
                      label="Select"
                      ghost
                      size={2}
                      onPress={() => modalToggle()}
                    />
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
)

export default SATWorkforceShiftMgmtSplits;

const mockSplitsData = [
  {
    date: '03/29/2018',
    start: '3:00 pm',
    end: '5:30 pm',
  },
  {
    date: '03/29/2018',
    start: '3:00 pm',
    end: '4:00 pm',
  },
];

const mockSelectedSplitsData = [
  {
    date: '03/29/2018',
    start: '8:00 am',
    end: '9:00 am',
  },
];
