import React, { Fragment } from 'react';

import moment from 'moment';

import { Popout } from '../../shared/popout';

export const CalendarEventPopout = ({
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
            <label>Event Date & Time</label>
            {moment(event.start).format('ll') !== moment(event.end).format('LL') ?
              <p>{moment(event.start).format('ll')} to {moment(event.end).format('LL')}</p>
            :
              <p>{moment(event.start).format('ll')}</p>
            }
            <p>{moment(event.start).format('LT')} to {moment(event.end).format('LT')}</p>
          </div>
          {event.body ?
            <div className="body__group">
              <label>Event Notes</label>
              <p>{event.body}</p>
            </div>
          :
            ''
          }
        </div>
      </Popout>
    </Fragment>
  );
};

export default CalendarEventPopout;
