import React, { Fragment } from 'react';

import CalendarEventPopout from 'calendar/shared/CalendarEventPopout';

export const CalendarEvent = ({
    event
  }) => {
  return (
    <Fragment>
      <p className="title">{event.title}</p>
      <CalendarEventPopout
        event={event}
      />
    </Fragment>
  )
};

export default CalendarEvent;
