import React, { Component, Fragment } from 'react';

import PageContent from '../shared/layout/PageContent';
import PageHeader from '../shared/layout/PageHeader';

import cardStyles from '../css/components/card.module.css';

class SATMessagesIndex extends Component {

  render() {

    return (
      <Fragment>
        <PageHeader
          pageTitleLeft="Messages"
          pageTitleIconLeft="email" />
        <PageContent>
          <div className={`${cardStyles.card} ${cardStyles.full}`}>
            <h1>Messages</h1>
          </div>
        </PageContent>
      </Fragment>
    );
  }
}

export default SATMessagesIndex;
