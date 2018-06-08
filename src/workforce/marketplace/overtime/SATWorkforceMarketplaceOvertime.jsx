import React, { Component, Fragment } from 'react';

import Calendar from 'react-big-calendar';
import moment from 'moment';

import SATWorkforceMarketplaceCalEvent from 'workforce/marketplace/shared/SATWorkforceMarketplaceCalEvent';
import SATWorkforceMarketplaceCalTopbar from 'workforce/marketplace/shared/SATWorkforceMarketplaceCalTopbar';

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
} from 'rv-unity-react';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'css/pages/calendar.css';

Calendar.momentLocalizer(moment);

const CalendarTopbar = ({label, onNavigate}) => {
  return (
    <SATWorkforceMarketplaceCalTopbar
      label={label}
      onNavigate={onNavigate}
      topbarBtn={false}
    />
  )
};

class SATWorkforceMarketplaceOvertime extends Component {

  state = {
    event: null,
    eventModal: false
  };

  eventPropGetter(event, start, end, isSelected) {
    const PastEvent = moment(start).isBefore(new Date());

    if(PastEvent) {
      return { className: 'workforce__event__hidden' }
    } else {
      return { className: 'workforce__event' }
    }
  };

  ToggleModal = () => {
    this.setState({
      event: null,
      eventModal: false
    })
  }

  render() {

    const { event: stateEvent } = this.state;

    return (
      <Fragment>
        <Calendar
          selectable
          events={mockCalendarOvertimeEvents}
          eventPropGetter={(this.eventPropGetter)}
          defaultDate={new Date()}
          scrollToTime={new Date()}
          views={[ 'month' ]}
          components={{
            event: SATWorkforceMarketplaceCalEvent,
            toolbar: CalendarTopbar,
          }}
          onSelectEvent={(event) => {
            let newEvent = event;
            let newEventModal = true;

            if (stateEvent && stateEvent.id === event.id) {
              newEvent = null;
            }

            this.setState({
              event: newEvent,
              eventModal: newEventModal
            });
          }}
          selected={stateEvent}
        />
        {/* TODO: Consider making component */}
        {this.state.event &&
          <Modal
            visible={this.state.eventModal}
          >
            <ModalHeader
              title="Request Overtime Shift"
              description={'Shift On ' + moment(this.state.event.start).format('ll') + ' between ' + this.state.event.title}
              onClose={() => this.ToggleModal()}
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
        }
      </Fragment>
    );
  }
}

export default SATWorkforceMarketplaceOvertime;

const mockCalendarOvertimeEvents = [
  {
    id: 0,
    title: '9:00 AM - 1:00 PM (EST)',
    start: new Date(2018, 4, 0),
    end: new Date(2018, 4, 1),
  },
  {
    id: 1,
    title: '5:00 PM - 12:00 AM (EST)',
    start: new Date(2018, 4, 0),
    end: new Date(2018, 4, 1),
  },
  {
    id: 2,
    title: '9:00 AM - 1:00 PM (EST)',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 0),
    end: new Date(2018, 5, 1),
  },
  {
    id: 3,
    title: '9:00 AM - 1:00 PM (EST)',
    start: new Date(2018, 5, 3),
    end: new Date(2018, 5, 3),
  },
  {
    id: 4,
    title: '4:00 AM - 9:00 PM (EST)',
    start: new Date(2018, 5, 3),
    end: new Date(2018, 5, 3),
  },
  {
    id: 5,
    title: '9:00 AM - 1:00 PM (EST)',
    start: new Date(2018, 5, 4),
    end: new Date(2018, 5, 4),
  },
  {
    id: 6,
    title: '4:00 AM - 9:00 PM (EST)',
    start: new Date(2018, 5, 4),
    end: new Date(2018, 5, 4),
  },
  {
    id: 7,
    title: '9:00 AM - 1:00 PM (EST)',
    start: new Date(2018, 5, 5),
    end: new Date(2018, 5, 5),
  },
  {
    id: 8,
    title: '9:00 AM - 1:00 PM (EST)',
    start: new Date(2018, 5, 6),
    end: new Date(2018, 5, 6),
  },
  {
    id: 9,
    title: '9:00 AM - 1:00 PM (EST)',
    start: new Date(2018, 5, 7),
    end: new Date(2018, 5, 7),
  },
  {
    id: 10,
    title: '9:00 AM - 1:00 PM (EST)',
    start: new Date(2018, 5, 8),
    end: new Date(2018, 5, 8),
  },
  {
    id: 11,
    title: '9:00 AM - 1:00 PM (EST)',
    start: new Date(2018, 5, 9),
    end: new Date(2018, 5, 9),
  },
  {
    id: 12,
    title: '9:00 AM - 1:00 PM (EST)',
    start: new Date(2018, 5, 10),
    end: new Date(2018, 5, 10),
  },
  {
    id: 13,
    title: '5:00 AM - 8:00 PM (EST)',
    start: new Date(2018, 5, 10),
    end: new Date(2018, 5, 10),
  },
  {
    id: 14,
    title: '9:00 AM - 1:00 PM (EST)',
    start: new Date(2018, 5, 11),
    end: new Date(2018, 5, 11),
  },
  {
    id: 15,
    title: '9:00 AM - 1:00 PM (EST)',
    start: new Date(2018, 5, 12),
    end: new Date(2018, 5, 12),
  },
  {
    id: 16,
    title: '9:00 AM - 1:00 PM (EST)',
    start: new Date(2018, 5, 13),
    end: new Date(2018, 5, 13),
  },
  {
    id: 17,
    title: '9:00 AM - 1:00 PM (EST)',
    start: new Date(2018, 5, 14),
    end: new Date(2018, 5, 14),
  },
  {
    id: 18,
    title: '9:00 AM - 1:00 PM (EST)',
    start: new Date(2018, 5, 15),
    end: new Date(2018, 5, 15),
  },
  {
    id: 19,
    title: '9:00 AM - 1:00 PM (EST)',
    start: new Date(2018, 5, 16),
    end: new Date(2018, 5, 16),
  },
  {
    id: 20,
    title: '9:00 AM - 1:00 PM (EST)',
    start: new Date(2018, 5, 17),
    end: new Date(2018, 5, 17),
  },
  {
    id: 21,
    title: '9:00 AM - 1:00 PM (EST)',
    start: new Date(2018, 5, 18),
    end: new Date(2018, 5, 18),
  },
  {
    id: 22,
    title: '9:00 AM - 1:00 PM (EST)',
    start: new Date(2018, 5, 19),
    end: new Date(2018, 5, 19),
  },
  {
    id: 23,
    title: '4:00 AM - 7:00 PM (EST)',
    start: new Date(2018, 5, 19),
    end: new Date(2018, 5, 19),
  },
];

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
