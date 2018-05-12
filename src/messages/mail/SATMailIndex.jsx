import React, { Component } from 'react';

import PageBlankState from '../../shared/layout/PageBlankState';
import SATMessagesAside from '../shared/SATMessagesAside';
import SATMessagesAsideHeader from '../shared/SATMessagesAsideHeader';
import SATMessagesContent from '../shared/SATMessagesContent';
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
        <SATMessagesContent>
          <PageBlankState
            blankStateIcon="mail"
            blankStateText="Your messages" />
        </SATMessagesContent>
      </div>
    );
  }
}

export default SATMailIndex;

const mockMessageItems = [
  {
    id: '1',
    author: 'Caitlyn Zahn',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: true
  },
  {
    id: '2',
    author: 'Joey Kirk',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: false
  },
  {
    id: '3',
    author: 'Clay Carpenter',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: false
  },
  {
    id: '4',
    author: 'Bonnie Adams',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: false
  },
  {
    id: '5',
    author: 'Caitlyn Zahn',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: true
  },
  {
    id: '6',
    author: 'Joey Kirk',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: false
  },
  {
    id: '7',
    author: 'Clay Carpenter',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: false
  },
  {
    id: '8',
    author: 'Bonnie Adams',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: false
  },
  {
    id: '9',
    author: 'Bonnie Adams',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: false
  },
  {
    id: '10',
    author: 'Caitlyn Zahn',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: true
  },
  {
    id: '11',
    author: 'Joey Kirk',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: false
  },
  {
    id: '12',
    author: 'Clay Carpenter',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: false
  },
  {
    id: '13',
    author: 'Bonnie Adams',
    text: 'Proin lorem sapien, tempus ullamcorper',
    unread: false
  }
];
