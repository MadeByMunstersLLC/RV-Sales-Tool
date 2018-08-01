import React from 'react';

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
} from 'rv-unity-react';

export const WorkforceShiftScheduleModal = ({
    modalVisibility,
    modalToggle,
  }) => (

    <Modal
      visible={modalVisibility}
    >
      <ModalHeader
        title="Request Schedule Change"
        description="Please rank this schedule change - 1 being the most preferred change"
        onClose={() => modalToggle()}
      />
      <ModalBody>
        <form>
          <Select
            id="rank-options"
            options={mockSelectOptions}
            placeholder="Please select one"
            value=" "
            onChange={() => undefined}
          />
        </form>
      </ModalBody>
      <ModalFooter>
        <Button
          label="Submit"
          onPress={() => modalToggle()}
        />
      </ModalFooter>
    </Modal>
)

export default WorkforceShiftScheduleModal;

const mockSelectOptions = [
  {value: '1', label: '1'},
  {value: '2', label: '2'},
  {value: '3', label: '3'},
  {value: '4', label: '4'},
]
