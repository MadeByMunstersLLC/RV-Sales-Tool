import React, { Component, Fragment } from 'react';

import Calendar from 'react-big-calendar';
import MaterialIcon from 'material-icons-react';
import moment from 'moment';

import { Popout } from 'shared/popout';
import PageContent from 'shared/layout/PageContent';
import PageHeader from 'shared/layout/PageHeader';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'css/pages/calendar.css';

Calendar.momentLocalizer(moment);

const EventPopout = ({
  event,
  eventOpen,
  eventClose
}) => {

  return (
    <Fragment>
      <Popout classes={`${eventOpen ? 'open' : 'closed'} calendar__popout`}>
        <header className="header">
          <h4 className="header__title">{event.title}</h4>
          <span onClick={eventClose} className="header__action" role="button" aria-label="Close Event Popout">
            <MaterialIcon icon="close" color="#FFFFFF" />
          </span>
        </header>
        <div className="body">
          <div className="body__group">
            <label>Event Time</label>
            {/* <p>{event.start}</p> */}
          </div>
          {event.body ?
            <div className="body__group">
              <label>Event Description</label>
              <p>{event.body}</p>
            </div>
          : '' }
        </div>
      </Popout>
      <div className={`${eventOpen ? 'calendar__popout__overlay' : ''}`} />
    </Fragment>
  );
};

const Modal = ({
  modalOpen,
  modalTitle
}) => {
  return (
    <div className={`${modalOpen ? 'open' : 'closed'}`}>
      <h1>{modalTitle}</h1>
    </div>
  );
};

class SATCalendarIndex extends Component {
  state = {
    newEventModalOpen: false,
    eventPopoutOpen: false,
    event: null,
  };

  isNewModalEventVisible = () => this.setState({
    newEventModalOpen: true,
    eventPopoutOpen: false,
    event: null,
  });

  isEventVisible = (event) => {
    this.setState({
      eventPopoutOpen: !this.eventPopoutOpen,
      newEventModalOpen: false,
      event: event,
    });
  }

  render() {

    return (
      <Fragment>
        <PageHeader
          pageTitleLeft="Calendar"
          pageTitleIconLeft="event"
          pageTitleIconRight="calendar_today"
        />
        <PageContent>
          {this.state.event && (
            <EventPopout
              eventOpen={this.state.eventPopoutOpen}
              eventClose={() => this.setState({eventPopoutOpen: false})}
              event={this.state.event}
            />
          )}
          <Modal
            modalTitle="Modal Title"
            modalOpen={this.state.newEventModalOpen}
          />
          <Calendar
            selectable
            events={events}
            defaultDate={new Date()}
            scrollToTime={new Date()}
            onSelectEvent={this.isEventVisible}
            onSelectSlot={this.isNewModalEventVisible}
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
    allDay: true,
    start: new Date(2018, 4, 0),
    end: new Date(2018, 4, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    body: null,
    start: new Date(2018, 4, 7),
    end: new Date(2018, 4, 10),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    body: null,
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: 'DTS ENDS',
    body: null,
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: 'Some Event',
    body: null,
    start: new Date(2018, 4, 9, 0, 0, 0),
    end: new Date(2018, 4, 9, 0, 0, 0),
  },
  {
    id: 5,
    title: 'Conference',
    body: 'Ut vestibulum posuere quam ut vulputate.',
    start: new Date(2018, 4, 11),
    end: new Date(2018, 4, 13),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    body: null,
    start: new Date(2018, 4, 12, 10, 30, 0, 0),
    end: new Date(2018, 4, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 7,
    title: 'Lunch',
    body: null,
    start: new Date(2018, 4, 12, 12, 0, 0, 0),
    end: new Date(2018, 4, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    id: 8,
    title: 'Meeting',
    body: 'Ut vestibulum posuere quam ut vulputate.',
    start: new Date(2018, 4, 12, 14, 0, 0, 0),
    end: new Date(2018, 4, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: 'Happy Hour',
    body: null,
    start: new Date(2018, 4, 12, 17, 0, 0, 0),
    end: new Date(2018, 4, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    id: 10,
    title: 'Dinner',
    body: null,
    start: new Date(2018, 4, 12, 20, 0, 0, 0),
    end: new Date(2018, 4, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: 'Birthday Party',
    body: null,
    start: new Date(2018, 4, 13, 7, 0, 0),
    end: new Date(2018, 4, 13, 10, 30, 0),
  },
  {
    id: 12,
    title: 'Late Night Event',
    body: null,
    start: new Date(2018, 4, 17, 19, 30, 0),
    end: new Date(2018, 4, 18, 2, 0, 0),
  },
  {
    id: 13,
    title: 'Multi-day Event',
    body: null,
    start: new Date(2018, 4, 20, 19, 30, 0),
    end: new Date(2018, 4, 22, 2, 0, 0),
  },
  {
    id: 14,
    title: 'Today',
    body: null,
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  }
]
