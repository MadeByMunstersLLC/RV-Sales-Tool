import React, { Component } from 'react';

import SATMessagesMessageFooter from '../shared/SATMessagesMessageFooter';
import SATMessagesMessageHeader from '../shared/SATMessagesMessageHeader';

import cardStyles from '../../css/components/card.module.css';
import messageStyles from '../../css/pages/messages.module.css';

class SATMailCreate extends Component {

  render() {

    return (
      <div>
        <SATMessagesMessageHeader>
          <input type="text" placeholder="Add recipient" />
        </SATMessagesMessageHeader>
        <SATMessagesMessageFooter />
      </div>
    );
  }
}

export default SATMailCreate;
