import React, { Component, Fragment } from 'react';

import Calendar from 'react-big-calendar';
import moment from 'moment';

import PageContent from '../shared/layout/PageContent';
import PageHeader from '../shared/layout/PageHeader';
import CalendarCustomizeModal from './shared/CalendarCustomizeModal';
import CalendarEvent from './shared/CalendarEvent';
import CalendarEventAddModal from './shared/CalendarEventAddModal';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../css/pages/calendar.css';

Calendar.momentLocalizer(moment);

// TODO:
  // • Editing an event is most likely needed, though we need to deteremine what events
  //   can be edited by an employee first.

class CalendarIndex extends Component {

  state = {
    event: null,
    addEventModal: false,
    customizeCalendarModal: false,
    createCalendarFormViz: false,
  };

  eventStyleGetter(event, start, end, isSelected) {
    const backgroundColor = '#' + event.eventColor;
    const style = {
      backgroundColor: backgroundColor,
    };

    return {
      style: style,
    };
  };

  toggleVizValue = (visValProp) => {
    this.setState({
      [visValProp]: !this.state[visValProp],
    });
  };

  render() {
    const { event: stateEvent } = this.state;

    return (
      <Fragment>
        <CalendarCustomizeModal
          customizeModalVisibility={this.state.customizeCalendarModal}
          customizeModalOnClose={() => this.toggleVizValue('customizeCalendarModal')}
          customizeCalFormViz={this.state.createCalendarFormViz}
          customizeCalFormToggle={() => this.toggleVizValue('createCalendarFormViz')}
          data={mockCalendars}
        />
        <CalendarEventAddModal
          addModalVisibility={this.state.addEventModal}
          addModalOnClose={() => this.toggleVizValue('addEventModal')}
          calendarData={mockCalendars}
        />
        <PageHeader
          pageTitleLeft="Calendar"
          pageTitleIconLeft="event"
          pageTitleIconRight="settings"
          pageTitleRightOnPress={() => this.toggleVizValue('customizeCalendarModal')}
        />
        <PageContent>
          <Calendar
            selectable
            events={mockCalendarEvents}
            eventPropGetter={(this.eventStyleGetter)}
            defaultDate={new Date()}
            scrollToTime={new Date()}
            onSelectEvent={(event) => {
              let newEvent = event;
              if (stateEvent && stateEvent.id === event.id) {
                newEvent = null;
              }
              this.setState({
                event: newEvent
              });
            }}
            onSelectSlot={() => {
              this.setState({
                addEventModal: !this.state.addEventModal,
              })
            }}
            selected={stateEvent}
            components={{
              event: CalendarEvent
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

export default CalendarIndex;

const mockCalendarEvents = [
  {
    id: 0,
    title: 'All Day Event very long title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum posuere quam ut vulputate.',
    eventColor: '0072FF',
    allDay: true,
    start: new Date(2018, 4, 0),
    end: new Date(2018, 4, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    body: null,
    eventColor: '0072FF',
    start: new Date(2018, 4, 7),
    end: new Date(2018, 4, 10),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    body: null,
    eventColor: '0072FF',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: 'DTS ENDS',
    body: null,
    eventColor: '20CD8E',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: 'Some Event',
    body: null,
    eventColor: '0072FF',
    start: new Date(2018, 4, 9, 0, 0, 0),
    end: new Date(2018, 4, 9, 0, 0, 0),
  },
  {
    id: 5,
    title: 'Conference',
    body: 'Ut vestibulum posuere quam ut vulputate.',
    eventColor: '20CD8E',
    start: new Date(2018, 4, 11),
    end: new Date(2018, 4, 13),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    body: null,
    eventColor: '20CD8E',
    start: new Date(2018, 4, 12, 10, 30, 0, 0),
    end: new Date(2018, 4, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 7,
    title: 'Lunch',
    body: null,
    eventColor: 'FF8C00',
    start: new Date(2018, 4, 12, 12, 0, 0, 0),
    end: new Date(2018, 4, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    id: 8,
    title: 'Meeting',
    body: 'Ut vestibulum posuere quam ut vulputate.',
    eventColor: '0072FF',
    start: new Date(2018, 4, 12, 14, 0, 0, 0),
    end: new Date(2018, 4, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: 'Happy Hour',
    body: null,
    eventColor: '20CD8E',
    start: new Date(2018, 4, 15, 17, 0, 0, 0),
    end: new Date(2018, 4, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    id: 10,
    title: 'Dinner',
    body: null,
    eventColor: '20CD8E',
    start: new Date(2018, 4, 12, 20, 0, 0, 0),
    end: new Date(2018, 4, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: 'Birthday Party',
    body: null,
    eventColor: '20CD8E',
    start: new Date(2018, 4, 13, 7, 0, 0),
    end: new Date(2018, 4, 13, 10, 30, 0),
  },
  {
    id: 12,
    title: 'Late Night Event',
    body: null,
    eventColor: '0072FF',
    start: new Date(2018, 4, 17, 19, 30, 0),
    end: new Date(2018, 4, 18, 2, 0, 0),
  },
  {
    id: 13,
    title: 'Multi-day Event',
    body: null,
    eventColor: '0072FF',
    start: new Date(2018, 4, 20, 19, 30, 0),
    end: new Date(2018, 4, 22, 2, 0, 0),
  },
  {
    id: 14,
    title: 'Today',
    body: null,
    eventColor: '20CD8E',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  }
];

const mockCalendars = [
  {
    id: '0',
    title: 'Personal',
    value: 'Personal',
    label: 'Personal',
    visibility: true,
  },
  {
    id: '1',
    title: 'Work Schedule',
    value: 'Work Schedule',
    label: 'Work Schedule',
    visibility: true,
  },
  {
    id: '2',
    title: 'Red Ventures\' Events',
    value: 'Red Ventures\' Events',
    label: 'Red Ventures\' Events',
    visibility: true,
  },
];
