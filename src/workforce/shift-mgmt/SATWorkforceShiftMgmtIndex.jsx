import React, { Component, Fragment } from 'react';

import SATWorkforceShiftMgmtSchedules from 'workforce/shift-mgmt/SATWorkforceShiftMgmtSchedules';
import SATWorkforceShiftMgmtSplits from 'workforce/shift-mgmt/SATWorkforceShiftMgmtSplits';
import SATWorkforceShiftScheduleModal from 'workforce/shift-mgmt/SATWorkforceShiftScheduleModal';
import SATWorkforceShiftSplitModal from 'workforce/shift-mgmt/SATWorkforceShiftSplitModal';

class SATWorkforceShiftMgmtIndex extends Component {

  state = {
    modalScheduleVisibility: false,
    modalSplitVisibility: false,
  };

  toggleModalVizValue = (visValProp) => {
    this.setState({
      [visValProp]: !this.state[visValProp],
    });
  };

  render() {

    return (
      <Fragment>
        <SATWorkforceShiftScheduleModal
          modalVisibility={this.state.modalScheduleVisibility}
          modalToggle={() => this.toggleModalVizValue('modalScheduleVisibility')}
        />
        <SATWorkforceShiftSplitModal
          modalVisibility={this.state.modalSplitVisibility}
          modalToggle={() => this.toggleModalVizValue('modalSplitVisibility')}
        />
        <SATWorkforceShiftMgmtSchedules
          modalToggle={() => this.toggleModalVizValue('modalScheduleVisibility')}
        />
        <SATWorkforceShiftMgmtSplits
          modalToggle={() => this.toggleModalVizValue('modalSplitVisibility')}
        />
      </Fragment>
    );
  }
}

export default SATWorkforceShiftMgmtIndex;
