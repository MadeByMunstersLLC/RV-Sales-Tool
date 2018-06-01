import React, { Component } from 'react';

import Calendar from 'react-big-calendar';
import moment from 'moment';

import SATWorkforceMarketplaceCalEvent from 'workforce/marketplace/shared/SATWorkforceMarketplaceCalEvent';
import SATWorkforceMarketplaceCalTopbar from 'workforce/marketplace/shared/SATWorkforceMarketplaceCalTopbar';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'css/pages/calendar.css';

Calendar.momentLocalizer(moment);

const CalendarTopbar = ({label, onNavigate}) => {
  return (
    <SATWorkforceMarketplaceCalTopbar
      label={label}
      onNavigate={onNavigate}
      topbarBtnTitle="REQUEST PTO"
    />
  )
};

class SATWorkforceMarketplaceTimeoff extends Component {

  eventPropGetter(event, start, end, isSelected) {
    return { className: 'workforce__event' }
  };

  render() {

    return (
      <Calendar
        selectable
        events={mockCalendarTimeoffEvents}
        eventPropGetter={(this.eventPropGetter)}
        defaultDate={new Date()}
        scrollToTime={new Date()}
        views={[ 'month' ]}
        components={{
          event: SATWorkforceMarketplaceCalEvent,
          toolbar: CalendarTopbar
        }}
      />
    );
  }
}

export default SATWorkforceMarketplaceTimeoff;


const mockCalendarTimeoffEvents = [
  {
    id: 0,
    title: 'AM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 4, 0),
    end: new Date(2018, 4, 1),
  },
  {
    id: 1,
    title: 'PM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 4, 0),
    end: new Date(2018, 4, 1),
  },
  {
    id: 2,
    title: 'AM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 0),
    end: new Date(2018, 5, 1),
  },
  {
    id: 3,
    title: 'PM Availability',
    eventColor: 'F0F4FF',
    start: new Date(2018, 5, 0),
    end: new Date(2018, 5, 1),
  },
]
