import React, { Component, Fragment } from 'react';

import Calendar from 'react-big-calendar';
import moment from 'moment';

import WorkforceMarketplaceCalEvent from 'workforce/marketplace/shared/WorkforceMarketplaceCalEvent';
import WorkforceMarketplaceCalTopbar from 'workforce/marketplace/shared/WorkforceMarketplaceCalTopbar';
import WorkforceMarketplaceTimeoffModal from 'workforce/marketplace/timeoff/WorkforceMarketplaceTimeoffModal';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'css/pages/calendar.css';

Calendar.momentLocalizer(moment);

class WorkforceMarketplaceTimeoff extends Component {

  // TODO:
    // • Once submitted label should of date/time should say pending
    // • Once approved label should of date/time should say approved while label is green
    // • Make sure availability markers stay sorted by time

  state = {
    events: mockCalendarTimeoffEvents,
    modalVisible: false,
  };

  eventPropGetter(event, start, end, isSelected) {
    const pastEvent = moment(start).isBefore(new Date());

    if(pastEvent) {
      return { className: 'workforce__event__hidden' }
    } else {
      return { className: 'workforce__event workforce__timeoff' }
    }
  };

  toggleEventSelection = (event) => {
    this.setState((prevState) => {
      const matchingEvent = prevState.events
        .find(candidateEvent => candidateEvent.id === event.id);

      const newState = {...prevState};
      const updatedEvent = {
        ...event,
        isSelected: !event.isSelected,
      };

      newState.events = newState.events
        .filter(candidateEvent => candidateEvent.id !== matchingEvent.id);
      newState.events = newState.events.concat([updatedEvent]);

      return newState;
    })
  }

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  };

  render() {
    const selectedEvents = this.state.events
      .filter(candidateEvent => candidateEvent.isSelected === true);

    const CalendarTopbar = ({label, onNavigate}) => {
      return (
        <WorkforceMarketplaceCalTopbar
          label={label}
          onNavigate={onNavigate}
          topbarBtnTitle="REQUEST PTO"
          topbarBtnEvent={this.toggleModal}
        />
      )
    };

    return (
      <Fragment>
        <Calendar
          selectable
          events={this.state.events}
          eventPropGetter={(this.eventPropGetter)}
          defaultDate={new Date()}
          scrollToTime={new Date()}
          views={[ 'month' ]}
          onSelectEvent={this.toggleEventSelection}
          components={{
            event: WorkforceMarketplaceCalEvent,
            toolbar: CalendarTopbar
          }}
        />
        <WorkforceMarketplaceTimeoffModal
          modalVisibility={this.state.modalVisible}
          modalToggle={this.toggleModal}
          events={selectedEvents}
        />
      </Fragment>
    );
  }
}

export default WorkforceMarketplaceTimeoff;

const mockCalendarTimeoffEvents = [
  {
    id: 0,
    title: 'AM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 4, 31),
    end: new Date(2018, 4, 31),
  },
  {
    id: 1,
    title: 'PM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 10),
    end: new Date(2018, 5, 10),
  },
  {
    id: 2,
    title: 'AM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 11),
    end: new Date(2018, 5, 11),
  },
  {
    id: 3,
    title: 'PM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 11),
    end: new Date(2018, 5, 11),
  },
  {
    id: 4,
    title: 'AM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 12),
    end: new Date(2018, 5, 12),
  },
  {
    id: 5,
    title: 'PM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 12),
    end: new Date(2018, 5, 12),
  },
  {
    id: 6,
    title: 'PM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 13),
    end: new Date(2018, 5, 13),
  },
  {
    id: 7,
    title: 'PM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 14),
    end: new Date(2018, 5, 14),
  },
  {
    id: 8,
    title: 'AM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 14),
    end: new Date(2018, 5, 14),
  },
  {
    id: 9,
    title: 'PM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 15),
    end: new Date(2018, 5, 15),
  },
  {
    id: 10,
    title: 'AM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 18),
    end: new Date(2018, 5, 18),
  },
  {
    id: 11,
    title: 'PM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 18),
    end: new Date(2018, 5, 18),
  },
  {
    id: 12,
    title: 'AM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 19),
    end: new Date(2018, 5, 19),
  },
  {
    id: 13,
    title: 'PM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 19),
    end: new Date(2018, 5, 19),
  },
  {
    id: 14,
    title: 'AM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 20),
    end: new Date(2018, 5, 20),
  },
  {
    id: 15,
    title: 'PM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 20),
    end: new Date(2018, 5, 20),
  },
  {
    id: 16,
    title: 'AM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 21),
    end: new Date(2018, 5, 21),
  },
  {
    id: 17,
    title: 'AM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 22),
    end: new Date(2018, 5, 22),
  },
  {
    id: 18,
    title: 'PM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 22),
    end: new Date(2018, 5, 22),
  },
  {
    id: 19,
    title: 'AM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 23),
    end: new Date(2018, 5, 23),
  },
  {
    id: 20,
    title: 'PM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 23),
    end: new Date(2018, 5, 23),
  },
  {
    id: 21,
    title: 'AM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 24),
    end: new Date(2018, 5, 24),
  },
  {
    id: 22,
    title: 'PM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 24),
    end: new Date(2018, 5, 24),
  },
  {
    id: 23,
    title: 'AM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 25),
    end: new Date(2018, 5, 25),
  },
  {
    id: 24,
    title: 'AM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 26),
    end: new Date(2018, 5, 26),
  },
  {
    id: 25,
    title: 'AM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 27),
    end: new Date(2018, 5, 27),
  },
  {
    id: 26,
    title: 'PM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 27),
    end: new Date(2018, 5, 27),
  },
  {
    id: 27,
    title: 'AM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 28),
    end: new Date(2018, 5, 28),
  },
  {
    id: 28,
    title: 'PM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 28),
    end: new Date(2018, 5, 28),
  },
  {
    id: 29,
    title: 'AM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 29),
    end: new Date(2018, 5, 29),
  },
  {
    id: 30,
    title: 'PM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 29),
    end: new Date(2018, 5, 29),
  },
];
