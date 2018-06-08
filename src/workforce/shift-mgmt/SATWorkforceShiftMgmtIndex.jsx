import React, { Component, Fragment } from 'react';

import SATWorkforceShiftMgmtSchedules from 'workforce/shift-mgmt/SATWorkforceShiftMgmtSchedules';
import SATWorkforceShiftMgmtSplits from 'workforce/shift-mgmt/SATWorkforceShiftMgmtSplits';

class SATWorkforceShiftMgmtIndex extends Component {

  render() {

    return (
      <Fragment>
        <SATWorkforceShiftMgmtSchedules />
        <SATWorkforceShiftMgmtSplits />
      </Fragment>
    );
  }
}

export default SATWorkforceShiftMgmtIndex;
