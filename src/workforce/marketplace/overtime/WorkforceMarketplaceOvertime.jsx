import React, { Component, Fragment } from 'react';

import Calendar from 'react-big-calendar';
import moment from 'moment';

import WorkforceMarketplaceOvertimeModal from 'workforce/marketplace/overtime/WorkforceMarketplaceOvertimeModal';
import WorkforceMarketplaceCalEvent from 'workforce/marketplace/shared/WorkforceMarketplaceCalEvent';
import WorkforceMarketplaceCalTopbar from 'workforce/marketplace/shared/WorkforceMarketplaceCalTopbar';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'css/pages/calendar.css';

Calendar.momentLocalizer(moment);

const CalendarTopbar = ({label, onNavigate}) => {
  return (
    <WorkforceMarketplaceCalTopbar
      label={label}
      onNavigate={onNavigate}
      topbarBtn={false}
    />
  )
};

class WorkforceMarketplaceOvertime extends Component {

  state = {
    event: null,
    eventModal: false
  };

  eventPropGetter(event, start, end, isSelected) {
    const pastEvent = moment(start).isBefore(new Date());

    if(pastEvent) {
      return { className: 'workforce__event__hidden' }
    } else {
      return { className: 'workforce__event' }
    }
  };

  toggleModal = () => {
    this.setState({
      event: null,
      eventModal: false
    })
  };

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
            event: WorkforceMarketplaceCalEvent,
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
        {this.state.event &&
          <WorkforceMarketplaceOvertimeModal
            event={this.state.event}
            eventModalVisibility={this.state.eventModal}
            eventModalToggle={this.toggleModal}
          />
        }
      </Fragment>
    );
  }
}

export default WorkforceMarketplaceOvertime;

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
