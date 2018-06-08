import React, { Component, Fragment } from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardList,
} from 'rv-unity-react';

import 'rv-unity/src/css/components/tables.css';

class SATWorkforceOverviewIndex extends Component {

  render() {

    return (
      <Fragment>
        <Card
          collapsible={true}
          visible={true}
        >
          <CardHeader
            onPress={() => undefined}
          >
            MarketPlace Requests
          </CardHeader>
          <CardHeader>
            Timeoff
          </CardHeader>
          <CardBody>
            <CardList>
              <table className="tables__unity-table">
                <thead className="tables__unity-table__header">
                  <tr>
                    <th>Request For</th>
                    <th>Updated On</th>
                    <th>Created On</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tables__unity-table__row">
                    <td className="tables__unity-table__cell">
                      hello
                    </td>
                    <td className="tables__unity-table__cell">
                      hello
                    </td>
                    <td className="tables__unity-table__cell">
                      hello
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardList>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}

export default SATWorkforceOverviewIndex;
