import React, { Component, Fragment } from 'react';

import WorkforceShiftMgmtSchedules from './WorkforceShiftMgmtSchedules';
import WorkforceShiftMgmtSplits from './WorkforceShiftMgmtSplits';
import WorkforceShiftScheduleModal from './WorkforceShiftScheduleModal';
import WorkforceShiftSplitModal from './WorkforceShiftSplitModal';

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
