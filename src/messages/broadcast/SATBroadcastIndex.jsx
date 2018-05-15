import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import PageBlankState from 'shared/layout/PageBlankState';
import SATMessagesAside from 'messages/shared/SATMessagesAside';
import SATMessagesAsideHeader from 'messages/shared/SATMessagesAsideHeader';
import SATMessagesContent from 'messages/shared/SATMessagesContent';
import SATMessagesList from 'messages/shared/SATMessagesList';
import SATMessagesMessage from 'messages/shared/SATMessagesMessage';

import cardStyles from 'css/components/card.module.css';
import messageStyles from 'css/pages/messages.module.css';

class SATBroadcastIndex extends Component {

  render() {

    return (
      <div className={`${cardStyles.card} ${cardStyles.full} ${messageStyles.container}`}>
        <SATMessagesAside>
          <SATMessagesAsideHeader>
            <input type="search" placeholder="Search for a message" />
          </SATMessagesAsideHeader>
          <SATMessagesList
            messageRoute="broadcasts"
            items={mockBroadcastsItems} />
        </SATMessagesAside>
        <SATMessagesContent>
          <Switch>
            <Route
              exact
              path="/messages/broadcasts/"
              render={ () =>
                <PageBlankState
                  blankStateIcon="warning"
                  blankStateText="Your broadcast messages" />
              }
            />
            <Route
              path="/messages/broadcasts/:id"
              render={ (props) =>
                <SATMessagesMessage
                  messagesReadOnly={true}
                  data={mockBroadcastsItems} {...props} />
              }
            />
          </Switch>
        </SATMessagesContent>
      </div>
    );
  }
}

export default SATBroadcastIndex;

const mockBroadcastsItems = [
  {
    id: '1',
    message_title: 'Lorem ipsum dolor sit amet dolor sit amet',
    broadcast: true,
    broadcastCategory: 'Contest',
    broadcastColor: 'primary',
    messages: [
      {
        created_at: '22 mins ago',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur mi massa, at faucibus orci sagittis sit amet. Vestibulum blandit lacus eu lorem ullamcorper, at sagittis urna molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur mi massa, at faucibus orci sagittis sit amet. Vestibulum blandit lacus eu lorem ullamcorper, at sagittis urna molestie.'
      },
    ],
  },
  {
    id: '2',
    message_title: 'Lorem ipsum amet dolor sit amet',
    broadcast: true,
    broadcastCategory: 'Contest',
    broadcastColor: 'primary',
    messages: [
      {
        created_at: '3 day ago',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur mi massa, at faucibus orci sagittis sit amet. Vestibulum blandit lacus eu lorem ullamcorper, at sagittis urna molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur mi massa, at faucibus orci sagittis sit amet. Vestibulum blandit lacus eu lorem ullamcorper, at sagittis urna molestie.'
      }
    ],
  },
  {
    id: '3',
    message_title: 'Lorem ipsum dolor sit amet ipsum dolor',
    broadcast: true,
    broadcastCategory: 'Meeting request',
    broadcastColor: 'caution',
    messages: [
      {
        created_at: '1 day ago',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur mi massa, at faucibus orci sagittis sit amet. Vestibulum blandit lacus eu lorem ullamcorper, at sagittis urna molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur mi massa, at faucibus orci sagittis sit amet. Vestibulum blandit lacus eu lorem ullamcorper, at sagittis urna molestie.'
      }
    ],
  }
];
