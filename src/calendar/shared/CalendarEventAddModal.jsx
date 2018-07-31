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

export const CalendarEventAddModal = ({
    addModalVisibility,
    addModalOnClose,
    calendarData,
  }) => {

  return (

    // TODO: Default start date should be the day selected from calendar

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
                type="date"
                value=""
                onChange={() => undefined}
              />
            </div>
            <div className="grid__unity-grid__span-columns-1"></div>
            <div className="grid__unity-grid__span-columns-4">
              <Select
                label="Start Time"
                id="start_time"
                onChange={() => undefined}
                placeholder="Select One"
                value=""
                options={mockCalendarTimes}
              />
            </div>
          </div>
          <div className="grid__unity-grid">
            <div className="grid__unity-grid__span-columns-7">
              <SingleInput
                label="End Date"
                id="end_date"
                type="date"
                value=""
                onChange={() => undefined}
              />
            </div>
            <div className="grid__unity-grid__span-columns-1"></div>
            <div className="grid__unity-grid__span-columns-4">
              <Select
                label="End Time"
                id="end_time"
                onChange={() => undefined}
                placeholder="Select One"
                value=""
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

export default CalendarEventAddModal;

const mockCalendarTimes = [
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
