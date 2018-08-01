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

export const WorkforceShiftMgmtSchedules = ({
    modalToggle,
  }) => (
    <Card
      collapsible={true}
      visible={true}
    >
      <CardHeader title="Schedule Change" />
      <CardHeader title="Requested Schedules" />
      <CardBody>
        <div className="tables__unity-table">
          <ul className="tables__unity-table__header">
            <li>Effective Date</li>
            <li>Rank</li>
            <li>Schedule</li>
            <li>Start Time</li>
            <li>End Time</li>
            <li></li>
          </ul>
          <div className="tables__unity-table__body">
            {mockSelectedScheduleData.map((item, index) =>
              <ul
                className="tables__unity-table__row"
                key={index}
              >
                <li className="tables__unity-table__cell">{item.effective_date}</li>
                <li className="tables__unity-table__cell">{item.rank}</li>
                <li className="tables__unity-table__cell">{item.schedule}</li>
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
      <CardHeader title="Available Schedules" />
      <CardBody>
        <div className="tables__unity-table">
          <ul className="tables__unity-table__header">
            <li>Effective Date</li>
            <li>Schedule</li>
            <li>Start Time</li>
            <li>End Time</li>
            <li></li>
          </ul>
          <div className="tables__unity-table__body">
            {mockScheduleData.map((item, index) =>
              <ul
                className="tables__unity-table__row"
                key={index}
              >
                <li className="tables__unity-table__cell">{item.effective_date}</li>
                <li className="tables__unity-table__cell">{item.schedule}</li>
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

export default WorkforceShiftMgmtSchedules;

const mockScheduleData = [
  {
    effective_date: '03/31/2018',
    schedule: 'M, T, W, Th, F',
    start: '8:00 am (EST)',
    end: '5:00 pm (EST)'
  },
  {
    effective_date: '04/04/2018',
    schedule: 'T',
    start: '10:30 am (EST)',
    end: '7:30 pm (EST)'
  },
  {
    effective_date: '04/04/2018',
    schedule: 'M, W, F',
    start: '8:00 am (EST)',
    end: '5:00 pm (EST)'
  },
  {
    effective_date: '04/06/2018',
    schedule: 'M, T, W, Th, F',
    start: '7:00 am (EST)',
    end: '4:30 pm (EST)'
  },
];

const mockSelectedScheduleData = [
  {
    effective_date: '03/31/2018',
    rank: '1',
    schedule: 'M, T, W, Th, F',
    start: '8:00 am (EST)',
    end: '5:00 pm (EST)'
  },
];
