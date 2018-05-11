import React, { Component } from 'react';

import SATMessagesAside from '../shared/SATMessagesAside';
import SATMessagesAsideHeader from '../shared/SATMessagesAsideHeader';
import SATMessagesList from '../shared/SATMessagesList';

import cardStyles from '../../css/components/card.module.css';
import messageStyles from '../../css/pages/messages.module.css';

class SATMailIndex extends Component {

  render() {

    return (
      <div className={`${cardStyles.card} ${cardStyles.full} ${messageStyles.container}`}>
        <SATMessagesAside>
          <SATMessagesAsideHeader />
          <SATMessagesList
            items={mockMessageItems} />
        </SATMessagesAside>
      </div>
    );
  }
}

export default SATMailIndex;

const mockMessageItems = [
  {
    author: 'Caitlyn Zahn',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: true
  },
  {
    author: 'Joey Kirk',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: false
  },
  {
    author: 'Clay Carpenter',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: false
  },
  {
    author: 'Bonnie Adams',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: false
  },
  {
    author: 'Caitlyn Zahn',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: true
  },
  {
    author: 'Joey Kirk',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: false
  },
  {
    author: 'Clay Carpenter',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: false
  },
  {
    author: 'Bonnie Adams',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: false
  },
  {
    author: 'Bonnie Adams',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: false
  },
  {
    author: 'Caitlyn Zahn',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: true
  },
  {
    author: 'Joey Kirk',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: false
  },
  {
    author: 'Clay Carpenter',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: false
  },
  {
    author: 'Bonnie Adams',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: false
  }
];
