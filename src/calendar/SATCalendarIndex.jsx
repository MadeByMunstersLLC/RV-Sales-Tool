import React, { Component, Fragment } from 'react';

import Calendar from 'react-big-calendar';
import MaterialIcon from 'material-icons-react';
import moment from 'moment';

import { Popout } from 'shared/popout';
import PageContent from 'shared/layout/PageContent';
import PageHeader from 'shared/layout/PageHeader';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'css/pages/calendar.css';

// TODO:
  // • Needs cleanup on event start and stop times to indicate if event is all day, spans multiple days or is one day long.
  // Move Event Popout to own component

Calendar.momentLocalizer(moment);

const Event = ({
  event
}) => {
  return (
    <Fragment>
      <p className={`${event.color} title`}>{event.title}</p>
      <EventPopout
        event={event}
      />
    </Fragment>
  )
};

const EventPopout = ({
  event
}) => {

  return (
    <Fragment>
      <Popout classes={`calendar__popout`}>
        <header className="header">
          <h6 className="header__title">Event Details</h6>
        </header>
        <div className="body">
          <div className="body__group">
            <label>Event Details</label>
            {event.body ?
              <p>{event.title} - {event.body}</p>
              :
              <p>{event.title}</p>
            }
            </div>
          <div className="body__group">
            <label>Event Date & Time</label>
            <p>{moment(event.start).format('ll')} to {moment(event.end).format('LL')}</p>
            <p>{moment(event.start).format('LT')} to {moment(event.end).format('LT')}</p>
          </div>
        </div>
      </Popout>
    </Fragment>
  );
};

class SATCalendarIndex extends Component {

  state = {
    event: null,
  };

  render() {
    const {event: stateEvent} = this.state;

    return (
      <Fragment>
        <PageHeader
          pageTitleLeft="Calendar"
          pageTitleIconLeft="event"
          pageTitleIconRight="add"
        />
        <PageContent>
          <Calendar
            selectable
            events={events}
            defaultDate={new Date()}
            scrollToTime={new Date()}
            onSelectEvent={(event) => {
              let newEvent = event;
              if (stateEvent && stateEvent.id === event.id) {
                newEvent = null;
              }
              this.setState({event: newEvent});
            }}
            selected={stateEvent}
            components={{
              event: Event
            }}
            views={[
              'month',
              'week',
              'day',
            ]}
          />
        </PageContent>
      </Fragment>
    );
  }
}

export default SATCalendarIndex;

const events = [
  {
    id: 0,
    title: 'All Day Event very long title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum posuere quam ut vulputate.',
    color: 'blue',
    allDay: true,
    start: new Date(2018, 4, 0),
    end: new Date(2018, 4, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    body: null,
    color: 'blue',
    start: new Date(2018, 4, 7),
    end: new Date(2018, 4, 10),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    body: null,
    color: 'blue',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: 'DTS ENDS',
    body: null,
    color: 'blue',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: 'Some Event',
    body: null,
    color: 'blue',
    start: new Date(2018, 4, 9, 0, 0, 0),
    end: new Date(2018, 4, 9, 0, 0, 0),
  },
  {
    id: 5,
    title: 'Conference',
    body: 'Ut vestibulum posuere quam ut vulputate.',
    color: 'blue',
    start: new Date(2018, 4, 11),
    end: new Date(2018, 4, 13),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    body: null,
    color: 'blue',
    start: new Date(2018, 4, 12, 10, 30, 0, 0),
    end: new Date(2018, 4, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 7,
    title: 'Lunch',
    body: null,
    color: 'orange',
    start: new Date(2018, 4, 12, 12, 0, 0, 0),
    end: new Date(2018, 4, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    id: 8,
    title: 'Meeting',
    body: 'Ut vestibulum posuere quam ut vulputate.',
    color: 'blue',
    start: new Date(2018, 4, 12, 14, 0, 0, 0),
    end: new Date(2018, 4, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: 'Happy Hour',
    body: null,
    color: 'green',
    start: new Date(2018, 4, 15, 17, 0, 0, 0),
    end: new Date(2018, 4, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    id: 10,
    title: 'Dinner',
    body: null,
    color: 'blue',
    start: new Date(2018, 4, 12, 20, 0, 0, 0),
    end: new Date(2018, 4, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: 'Birthday Party',
    body: null,
    color: 'green',
    start: new Date(2018, 4, 13, 7, 0, 0),
    end: new Date(2018, 4, 13, 10, 30, 0),
  },
  {
    id: 12,
    title: 'Late Night Event',
    body: null,
    color: 'green',
    start: new Date(2018, 4, 17, 19, 30, 0),
    end: new Date(2018, 4, 18, 2, 0, 0),
  },
  {
    id: 13,
    title: 'Multi-day Event',
    body: null,
    color: 'blue',
    start: new Date(2018, 4, 20, 19, 30, 0),
    end: new Date(2018, 4, 22, 2, 0, 0),
  },
  {
    id: 14,
    title: 'Today',
    body: null,
    color: 'blue',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  }
]
