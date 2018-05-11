import React, { Component } from 'react';

import cardStyles from '../../css/components/card.module.css';

class SATBroadcastIndex extends Component {

  render() {

    return (
      <div className={`${cardStyles.card} ${cardStyles.full}`}>
        <h1>Broadcast</h1>
      </div>
    );
  }
}

export default SATBroadcastIndex;
