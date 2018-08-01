import React from 'react';

import {
  Card,
  CardHeader,
  CardBody,
} from 'rv-unity-react';

import profileStyles from '../../css/pages/agent-profile.module.css';

export const AgentProfileStatsWidget = ({
  data,
}) => (
  <Card
    collapsible={false}
    visible={true}
  >
    <CardHeader title="Agent Stats" />
    <CardBody>
      <ul className={`${profileStyles.card__stats}`}>
        {data.stats.map((stat, index) =>
          <li
            key={index}
            className={`${profileStyles.card__stat}`}
          >
            <ul className={`${profileStyles.card__stat__list}`}>
              <li className={`${profileStyles.card__stat__item} ${profileStyles.card__stat__label}`}>{stat.label}</li>
              <li className={`${profileStyles.card__stat__item} ${profileStyles.card__stat__number}`}>{stat.value}</li>
            </ul>
          </li>
        )}
      </ul>
    </CardBody>
  </Card>
)

export default AgentProfileStatsWidget;
