import React, { Fragment } from 'react';

export const WorkforceMarketplaceCalEvent = ({
    event
  }) => (
    <Fragment>
      <p className={`title ${event.isSelected ? 'selected' : ''}`}>
        {event.title}
      </p>
    </Fragment>
);

export default WorkforceMarketplaceCalEvent;
