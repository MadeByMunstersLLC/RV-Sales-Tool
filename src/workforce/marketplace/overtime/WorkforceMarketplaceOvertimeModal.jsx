import React from 'react';

import moment from 'moment';

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
} from 'rv-unity-react';

export const WorkforceMarketplaceOvertimeModal = ({
    event,
    eventModalVisibility,
    eventModalToggle,
  }) => (

    <Modal
      visible={eventModalVisibility}
    >
      <ModalHeader
        title="Request Overtime Shift"
        description={'Shift On ' + moment(event.start).format('ll') + ' between ' + event.title}
        onClose={() => eventModalToggle()}
      />
      <ModalBody>
        {/* TODO: Options should be a time range that looks at data model for all time increments between start and end time */}
        <form className="grid__unity-grid">
          <div className="grid__unity-grid__span-columns-5">
            <Select
              id="start_time"
              label="Start Time"
              placeholder="Please Select One"
              onChange={() => undefined}
              options={mockTimes}
            />
          </div>
          <div className="grid__unity-grid__span-columns-1"></div>
          <div className="grid__unity-grid__span-columns-5">
            <Select
              id="end_time"
              label="End Time"
              placeholder="Please Select One"
              onChange={() => undefined}
              options={mockTimes}
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button
          label="Submit"
          onPress={() => undefined}
        />
      </ModalFooter>
    </Modal>
)

export default WorkforceMarketplaceOvertimeModal;

const mockTimes = [
  { value: '12:00 AM', label: '12:00 AM' },
  { value: '1:00 AM', label: '1:00 AM' },
  { value: '2:00 AM', label: '2:00 AM' },
  { value: '3:00 AM', label: '3:00 AM' },
  { value: '4:00 AM', label: '4:00 AM' },
  { value: '5:00 AM', label: '5:00 AM' },
  { value: '6:00 AM', label: '6:00 AM' },
  { value: '7:00 AM', label: '7:00 AM' },
  { value: '8:00 AM', label: '8:00 AM' },
  { value: '9:00 AM', label: '9:00 AM' },
  { value: '10:00 AM', label: '10:00 AM' },
  { value: '11:00 AM', label: '11:00 AM' },
  { value: '12:00 PM', label: '12:00 PM' },
  { value: '1:00 PM', label: '1:00 PM' },
  { value: '2:00 PM', label: '2:00 PM' },
  { value: '3:00 PM', label: '3:00 PM' },
  { value: '4:00 PM', label: '4:00 PM' },
  { value: '5:00 PM', label: '5:00 PM' },
  { value: '6:00 PM', label: '6:00 PM' },
  { value: '7:00 PM', label: '7:00 PM' },
  { value: '8:00 PM', label: '8:00 PM' },
  { value: '9:00 PM', label: '9:00 PM' },
  { value: '10:00 PM', label: '10:00 PM' },
  { value: '11:00 PM', label: '11:00 PM' },
];
