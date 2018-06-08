import React, { Fragment } from 'react';

export const SATWorkforceMarketplaceCalEvent = ({
    event
  }) => (
    <Fragment>
      <p className="title">
        {event.isSelected ? 'X ' : ''}
        {event.title}
      </p>
    </Fragment>
);

export default SATWorkforceMarketplaceCalEvent;
