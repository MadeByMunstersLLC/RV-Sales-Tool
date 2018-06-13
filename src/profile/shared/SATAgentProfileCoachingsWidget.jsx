import React from 'react';
import { NavLink } from "react-router-dom";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
} from 'rv-unity-react';

export const SATAgentProfileCoachingsWidget = ({
  data
}) => (
  <Card
    collapsible={false}
    visible={true}
  >
    <CardHeader>
      Coachings
    </CardHeader>
    <CardBody>
      <ul>
        {data.map((item, index) =>
          <li key={index}>
            <ul>
              <li>
                {item.date}
              </li>
              <li>
                <NavLink
                  to={`/agent_profile/coaching/${item.id}`}>
                  <Button
                    label="View"
                    onPress={() => undefined}
                    ghost
                  />
                </NavLink>
              </li>
            </ul>
          </li>
        )}
      </ul>
    </CardBody>
  </Card>
)

export default SATAgentProfileCoachingsWidget;
