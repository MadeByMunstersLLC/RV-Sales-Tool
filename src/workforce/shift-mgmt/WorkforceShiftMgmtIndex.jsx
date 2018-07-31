import React, { Component, Fragment } from 'react';

import WorkforceShiftMgmtSchedules from 'workforce/shift-mgmt/WorkforceShiftMgmtSchedules';
import WorkforceShiftMgmtSplits from 'workforce/shift-mgmt/WorkforceShiftMgmtSplits';
import WorkforceShiftScheduleModal from 'workforce/shift-mgmt/WorkforceShiftScheduleModal';
import WorkforceShiftSplitModal from 'workforce/shift-mgmt/WorkforceShiftSplitModal';

class WorkforceShiftMgmtIndex extends Component {

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
        <WorkforceShiftScheduleModal
          modalVisibility={this.state.modalScheduleVisibility}
          modalToggle={() => this.toggleModalVizValue('modalScheduleVisibility')}
        />
        <WorkforceShiftSplitModal
          modalVisibility={this.state.modalSplitVisibility}
          modalToggle={() => this.toggleModalVizValue('modalSplitVisibility')}
        />
        <WorkforceShiftMgmtSchedules
          modalToggle={() => this.toggleModalVizValue('modalScheduleVisibility')}
        />
        <WorkforceShiftMgmtSplits
          modalToggle={() => this.toggleModalVizValue('modalSplitVisibility')}
        />
      </Fragment>
    );
  }
}

export default WorkforceShiftMgmtIndex;
