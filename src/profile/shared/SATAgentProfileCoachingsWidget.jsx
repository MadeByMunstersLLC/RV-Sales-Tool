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
      <div className="tables__unity-table ">
        <ul className="tables__unity-table__header">
          <li>Date</li>
          <li>Call ID</li>
          <li>Cocahing By</li>
          <li>Category</li>
          <li></li>
        </ul>
        <div className="tables__unity-table__body">
          {data.map((item, index) =>
            <ul
              key={index}
              className="tables__unity-table__row"
              >
                <li className="tables__unity-table__cell">
                  {item.call_id}
                </li>
                <li className="tables__unity-table__cell">
                  {item.date}
                </li>
                <li className="tables__unity-table__cell">
                  {item.coaching_by}
                </li>
                <li className="tables__unity-table__cell">
                  {item.coaching_category}
                </li>
                <li className="tables__unity-table__cell">
                  <NavLink
                    className="helpers__unity-h--float-right"
                    to={`/agent_profile/coaching/${item.id}`}>
                    <Button
                      label="View"
                      onPress={() => undefined}
                      ghost
                      size={2}
                    />
                  </NavLink>
                </li>
              </ul>
            )}
        </div>
      </div>
    </CardBody>
  </Card>
)

export default SATAgentProfileCoachingsWidget;
