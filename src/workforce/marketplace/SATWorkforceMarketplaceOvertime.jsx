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
      topbarBtnTitle="REQUEST OT"
    />
  )
};

class SATWorkforceMarketplaceOvertime extends Component {

  eventPropGetter(event, start, end, isSelected) {
    return { className: 'workforce__event' }
  };

  render() {

    return (
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
      />
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
]
