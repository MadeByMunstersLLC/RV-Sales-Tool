import React from 'react';

import moment from 'moment';

import {
  Card,
  CardHeader,
  CardBody,
  IconAgent,
} from 'rv-unity-react';

import profileStyles from '../../css/pages/agent-profile.module.css';

export const AgentProfileScheduleWidget = ({
  data,
}) => (
  <Card
    collapsible={false}
    visible={true}
  >
    <CardHeader>
      Schedule
    </CardHeader>
    <CardBody>
      <div className="grid__unity-grid">
        <div className={`${profileStyles.schedule__avatar} grid__unity-grid__span-columns-4`}>
          {data.avatar ?
            (
              // TODO: Add Alt tag for name
              <img src={data.avatar} alt="" />
            )
          :
            (
              <IconAgent />
            )
          }
        </div>
        <div className="grid__unity-grid__span-columns-1"></div>
        <div className="grid__unity-grid__span-columns-7">
          <div className="tables__unity-table tables__unity-table--is-compact">
            <ul className="tables__unity-table__header">
              <li>Day</li>
              <li>Date</li>
              <li>Time</li>
            </ul>
            <div className="tables__unity-table__body">
              {data.schedule.map((item, index) =>
                <ul
                  key={index}
                  className="tables__unity-table__row"
                  >
                    <li className="tables__unity-table__cell">
                      {moment(item.start_time).format('dddd')}
                    </li>
                    <li className="tables__unity-table__cell">
                      {moment(item.end_time).format('MM-DD-YY')}
                    </li>
                    <li className="tables__unity-table__cell">
                      {moment(item.start_time).format('h:mm a')} -
                      {moment(item.end_time).format('h:mm a')}
                    </li>
                  </ul>
                )}
            </div>
          </div>
        </div>
      </div>
    </CardBody>
  </Card>
)

export default AgentProfileScheduleWidget;
