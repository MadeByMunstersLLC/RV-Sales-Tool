import React from 'react';

import moment from 'moment';

import {
  Card,
  CardHeader,
  CardBody,
  IconAgent,
} from 'rv-unity-react';

import profileStyles from 'css/pages/agent-profile.module.css';

export const SATAgentProfileScheduleWidget = ({
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
          <ul>
            {data.schedule.map((item, index) =>
              <li key={index}>
                Day: {moment(item.start_time).format('dddd')}
                Start: {moment(item.start_time).format('h:mm')}
                End: {moment(item.end_time).format('h:mm')}
              </li>
            )}
          </ul>
        </div>
      </div>
    </CardBody>
  </Card>
)

export default SATAgentProfileScheduleWidget;
