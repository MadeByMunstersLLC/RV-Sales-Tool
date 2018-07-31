import * as React from 'react';
import _groupBy from 'lodash/groupBy';
import moment from 'moment';

import { SortableElement } from 'react-sortable-hoc';

import DashboardItem from 'dashboard/shared/DashboardItem';

import widgetStyles from 'css/modules/dashboard-event-cal.module.css';

// TODO:
  // • Need to add sort once data model figured out
  // • Might need to set a limit of how many items are returned

export const DashboardEventCalWidget = SortableElement(({
    size,
    title,
  }) => {

    const EventList = ({events}) => {

      const nowMoment = moment().startOf('date');
      const futureEvents = events.filter(event => moment(event.start.toISOString()).isAfter(nowMoment));
      const eventGroups = _groupBy(futureEvents, event => event.start.toISOString());

      return(
        <ul>
          {Object.keys(eventGroups).map((eventGroupDate, index) => {
            const groupedEvents = eventGroups[eventGroupDate];

            return (
              <li
                key={index}
                className={`${widgetStyles.item}`}
              >
                <p className={`
                    ${widgetStyles.item__left}
                    ${nowMoment === eventGroupDate ? `${widgetStyles.item__active}` : ''}
                  `}>
                  <span className={`${widgetStyles.item__day}`}>
                    {moment(eventGroupDate).format('MMM.')}
                  </span>
                  <span className={`${widgetStyles.item__date}`}>
                    {moment(eventGroupDate).format('DD')}
                  </span>
                </p>
                <ul className={`${widgetStyles.item__right}`}>
                  {groupedEvents.map(event => (
                    <li key={event.id}>
                      <time className={`${widgetStyles.item__time}`}>{moment(event.start).format('h:mm a')}</time>
                      {event.title}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
      )
    };

    return(
      <DashboardItem
        dashboardItemSize={size}
        dashboardItemTitle={title}
      >
        <EventList
          events={mockCalendarEvents}
        />
      </DashboardItem>
    )
  }
)

export default DashboardEventCalWidget;


const mockCalendarEvents = [
  {
    id: 0,
    title: 'Event Title 1',
    body: null,
    eventColor: '0072FF',
    start: new Date(2018, 5, 13, 10),
    end: new Date(2018, 5, 13, 10),
  },
  {
    id: 1,
    title: 'Event Title 2',
    body: null,
    eventColor: '0072FF',
    start: new Date(2018, 6, 0),
    end: new Date(2018, 6, 1),
  },
  {
    id: 2,
    title: 'Event Title 3',
    body: null,
    eventColor: '0072FF',
    start: new Date(2018, 6, 4),
    end: new Date(2018, 6, 4),
  },
  {
    id: 3,
    title: 'Event Title 4',
    body: null,
    eventColor: '20CD8E',
    start: new Date(2018, 6, 2),
    end: new Date(2018, 6, 2),
  },
  {
    id: 4,
    title: 'Event Title 5',
    body: null,
    eventColor: '20CD8E',
    start: new Date(2018, 6, 2),
    end: new Date(2018, 6, 2),
  },
  {
    id: 5,
    title: 'Event Title 6',
    body: null,
    eventColor: '20CD8E',
    start: new Date(2018, 6, 3),
    end: new Date(2018, 6, 3),
  },
];
