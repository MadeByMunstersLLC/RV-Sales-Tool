import React from 'react';

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
  SingleInput,
} from 'rv-unity-react';

export const SATCalendarEventAddModal = ({
    addModalVisibility,
    addModalOnClose,
    calendarData,
  }) => {
  return (
    <Modal
      visible={addModalVisibility}
    >
      <ModalHeader
        title="Add Calendar Event"
        description="Fill out the form below to add an event to your calendar."
        onClose={() => addModalOnClose()}
      />
      <ModalBody>
        <form>
          <div className="grid__unity-grid">
            <div className="grid__unity-grid__span-columns-7">
              <SingleInput
                label="Event Title"
                id="title"
                value=""
                onChange={() => undefined}
              />
            </div>
            <div className="grid__unity-grid__span-columns-1"></div>
            <div className="grid__unity-grid__span-columns-4">
              <Select
                label="Calendar"
                id="calendar"
                value=""
                onChange={() => undefined}
                placeholder="Select One"
                options={calendarData}
              />
            </div>
          </div>
          <div className="grid__unity-grid">
            <SingleInput
              label="Event Description"
              id="desc"
              value=""
              onChange={() => undefined}
            />
          </div>
          <div className="grid__unity-grid">
            <div className="grid__unity-grid__span-columns-7">
              <SingleInput
                label="State Date"
                id="start_date"
                value=""
                type="date"
                onChange={() => undefined}
              />
            </div>
            <div className="grid__unity-grid__span-columns-1"></div>
            <div className="grid__unity-grid__span-columns-4">
              <Select
                label="Start Time"
                id="start_time"
                value=""
                onChange={() => undefined}
                placeholder="Select One"
                options={mockCalendarTimes}
              />
            </div>
          </div>
          <div className="grid__unity-grid">
            <div className="grid__unity-grid__span-columns-7">
              <SingleInput
                label="End Date"
                id="end_date"
                value=""
                type="date"
                onChange={() => undefined}
              />
            </div>
            <div className="grid__unity-grid__span-columns-1"></div>
            <div className="grid__unity-grid__span-columns-4">
              <Select
                label="End Time"
                id="end_time"
                value=""
                onChange={() => undefined}
                placeholder="Select One"
                options={mockCalendarTimes}
              />
            </div>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        {/* TODO: Update onPress event */}
        <Button
          label="Add Event"
          size={0}
          onPress={() => addModalOnClose()}
        />
      </ModalFooter>
    </Modal>
  )
};

export default SATCalendarEventAddModal;

const mockCalendarTimes = [
  { time: '12:00 AM' },
  { time: '1:00 AM' },
  { time: '2:00 AM' },
  { time: '3:00 AM' },
  { time: '4:00 AM' },
  { time: '5:00 AM' },
  { time: '6:00 AM' },
  { time: '7:00 AM' },
  { time: '8:00 AM' },
  { time: '9:00 AM' },
  { time: '10:00 AM' },
  { time: '11:00 AM' },
  { time: '12:00 PM' },
  { time: '1:00 PM' },
  { time: '2:00 PM' },
  { time: '3:00 PM' },
  { time: '4:00 PM' },
  { time: '5:00 PM' },
  { time: '6:00 PM' },
  { time: '7:00 PM' },
  { time: '8:00 PM' },
  { time: '9:00 PM' },
  { time: '10:00 PM' },
  { time: '11:00 PM' },
];
