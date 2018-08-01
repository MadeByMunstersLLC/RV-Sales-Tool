import React from 'react';

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'rv-unity-react';

// TODO:
  // • Need to generate a list of times for make up

export const WorkforceShiftSplitModal = ({
    modalVisibility,
    modalToggle,
  }) => (

    <Modal
      visible={modalVisibility}
    >
      <ModalHeader
        title="Request Split Shift"
        description="Below are the available make up times. Please rank only the times you can work."
        onClose={() => modalToggle()}
      />
      <ModalBody>
        Generate list of available splits
      </ModalBody>
      <ModalFooter>
        <Button
          label="Submit"
          onPress={() => modalToggle()}
        />
      </ModalFooter>
    </Modal>
)

export default WorkforceShiftSplitModal;
