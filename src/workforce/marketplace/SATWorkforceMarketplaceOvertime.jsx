import React, { Component } from 'react';

import Calendar from 'react-big-calendar';
import moment from 'moment';

import SATWorkforceMarketplaceEvent from 'workforce/marketplace/shared/SATWorkforceMarketplaceEvent';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'css/pages/calendar.css';

Calendar.momentLocalizer(moment);

const HeaderToolbar = ({label, onNavigate}) => {
  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button onClick={() => onNavigate("TODAY")} type="button">today</button>
        <button onClick={() => onNavigate("PREV")} type="button">back</button>
        <button onClick={() => onNavigate("NEXT")} type="button">next</button>
      </span>
      <span className="rbc-toolbar-label">{label}</span>
      <span>
        <button type="button">Action Title</button>
      </span>
    </div>
  );
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
          event: SATWorkforceMarketplaceEvent,
          toolbar: HeaderToolbar
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
