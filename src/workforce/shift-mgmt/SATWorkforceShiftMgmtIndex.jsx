import React, { Component, Fragment } from 'react';

import SATWorkforceShiftMgmtSchedules from 'workforce/shift-mgmt/SATWorkforceShiftMgmtSchedules';
import SATWorkforceShiftMgmtSplits from 'workforce/shift-mgmt/SATWorkforceShiftMgmtSplits';
import SATWorkforceShiftScheduleModal from 'workforce/shift-mgmt/SATWorkforceShiftScheduleModal';

class SATWorkforceShiftMgmtIndex extends Component {

  state = {
    modalVisibility: false,
  }

  toggleModal = () => {
    console.log(this.state.modalVisibility);
    this.setState({
      modalVisibility: !this.state.modalVisibility,
    })
  };


  render() {

    return (
      <Fragment>
        <SATWorkforceShiftScheduleModal
          modalVisibility={this.state.modalVisibility}
          modalToggle={this.toggleModal}
        />
        <SATWorkforceShiftMgmtSchedules
          modalToggle={this.toggleModal}
        />
        <SATWorkforceShiftMgmtSplits />
      </Fragment>
    );
  }
}

export default SATWorkforceShiftMgmtIndex;
