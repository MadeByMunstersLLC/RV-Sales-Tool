import React from 'react';
import { NavLink } from "react-router-dom";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
} from 'rv-unity-react';

export const WorkforceMarketplaceOverviewRequestsCard = () => (
  <Card
    collapsible={true}
    visible={true}
  >
    <CardHeader title="MarketPlace Requests" />
    <CardHeader title="Timeoff" />
    <CardBody>
      <div className="tables__unity-table">
        <ul className="tables__unity-table__header">
          <li>Request For</li>
          <li>Updated On</li>
          <li>Created On</li>
          <li></li>
        </ul>
        <div className="tables__unity-table__body">
          <ul className="tables__unity-table__row">
            <li className="tables__unity-table__cell">03/28/2018 - 03/30/2018</li>
            <li className="tables__unity-table__cell">03/15/2018</li>
            <li className="tables__unity-table__cell">03/15/2018</li>
            <li className="tables__unity-table__cell">
              <NavLink
                className="helpers__unity-h--float-right"
                to={`/workforce/marketplace/timeoff`}>
                <Button
                  label="Edit"
                  onPress={() => undefined}
                  ghost
                  size={2}
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </CardBody>
    <CardHeader title="Shift Swap" />
    <CardBody>
      <div className="tables__unity-table">
        <ul className="tables__unity-table__header">
          <li>Request For</li>
          <li>Proposals</li>
          <li>Updated On</li>
          <li>Created On</li>
          <li></li>
        </ul>
        <div className="tables__unity-table__body">
          <ul className="tables__unity-table__row">
            <li className="tables__unity-table__cell">04/06/2018 from 8:00 am - 5:00 pm</li>
            <li className="tables__unity-table__cell">2 Pending</li>
            <li className="tables__unity-table__cell">03/15/2018</li>
            <li className="tables__unity-table__cell">03/15/2018</li>
            <li className="tables__unity-table__cell">
              <NavLink
                className="helpers__unity-h--float-right"
                to={`/workforce/marketplace/shift_swap`}>
                <Button
                  label="Edit"
                  onPress={() => undefined}
                  ghost
                  size={2}
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </CardBody>
    <CardHeader title="Overtime" />
    <CardBody>
      <div className="tables__unity-table">
        <ul className="tables__unity-table__header">
          <li>Request For</li>
          <li>Updated On</li>
          <li>Created On</li>
          <li></li>
        </ul>
        <div className="tables__unity-table__body">
          <ul className="tables__unity-table__row">
            <li className="tables__unity-table__cell">03/29/2018 from 9:00 am - 11:00 am</li>
            <li className="tables__unity-table__cell">04/02/2018 from 8:00 am - 5:00 pm</li>
            <li className="tables__unity-table__cell">03/30/2018 from 8:00 am - 5:00 pm</li>
            <li className="tables__unity-table__cell">
              <NavLink
                className="helpers__unity-h--float-right"
                to={`/workforce/marketplace/overtime`}>
                <Button
                  label="Edit"
                  onPress={() => undefined}
                  ghost
                  size={2}
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </CardBody>
  </Card>
)

export default WorkforceMarketplaceOverviewRequestsCard;
