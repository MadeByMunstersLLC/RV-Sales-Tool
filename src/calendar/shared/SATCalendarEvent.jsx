import React, { Fragment } from 'react';

import SATCalendarEventPopout from 'calendar/shared/SATCalendarEventPopout';

export const SATCalendarEvent = ({
    event
  }) => {
  return (
    <Fragment>
      <p className="title">{event.title}</p>
      <SATCalendarEventPopout
        event={event}
      />
    </Fragment>
  )
};

export default SATCalendarEvent;
