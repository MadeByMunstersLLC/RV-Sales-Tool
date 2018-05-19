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

  state = {
    messages: mockBroadcastsItems,
    deleteAlert: false,
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.state.deleteAlert !== prevState.deleteAlert) {
      this.removeDeleteAlert = setTimeout(() => {
        this.setState({
          deleteAlert: false
        });
      }, 6000);
    }
  };

  removeMessage(id) {
    const newState = this.state;
    const index = newState.messages.findIndex(m => m.id === id);

    if (index === -1) return;
    newState.messages.splice(index, 1);

    this.setState({
      newState,
      deleteAlert: true
    });
  };

  archiveMessage(id) {
    console.log(id);
  }

  render() {

    return (
      <div className={`${cardStyles.card} ${cardStyles.full} ${messageStyles.container}`}>
        <SATMessagesAside>
          <SATMessagesAsideHeader>
            <input type="search" placeholder="Search for a message" />
          </SATMessagesAsideHeader>
          <SATMessagesList
            messageRoute="broadcasts"
            removeMessage={this.removeMessage.bind(this)}
            archiveMessage={this.archiveMessage.bind(this)}
            items={mockBroadcastsItems}
          />
        </SATMessagesAside>
        <SATMessagesContent>
          <Switch>
            <Route
              exact
              path="/messages/broadcasts/"
              render={ () =>
                <PageBlankState
                  blankStateIcon="warning"
                  blankStateText="Your broadcast messages"
                />
              }
            />
            <Route
              path="/messages/broadcasts/:id"
              render={ (props) =>
                <SATMessagesMessage
                  messagesReadOnly={true}
                  removeMessage={this.removeMessage.bind(this)}
                  archiveMessage={this.archiveMessage.bind(this)}
                  data={mockBroadcastsItems}
                  {...props}
                />
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
    updated_at: '22 mins ago',
    message_title: 'Lorem ipsum dolor sit amet dolor sit amet',
    broadcast: true,
    broadcastCategory: 'Contest',
    broadcastColor: 0,
    unread: false,
    archived: false,
    messages: [
      {
        created_at: '22 mins ago',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur mi massa, at faucibus orci sagittis sit amet. Vestibulum blandit lacus eu lorem ullamcorper, at sagittis urna molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur mi massa, at faucibus orci sagittis sit amet. Vestibulum blandit lacus eu lorem ullamcorper, at sagittis urna molestie.'
      },
    ],
  },
  {
    id: '2',
    updated_at: '3 days ago',
    message_title: 'Lorem ipsum amet dolor sit amet',
    broadcast: true,
    broadcastCategory: 'Contest',
    broadcastColor: 0,
    unread: false,
    archived: false,
    messages: [
      {
        created_at: '3 day ago',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur mi massa, at faucibus orci sagittis sit amet. Vestibulum blandit lacus eu lorem ullamcorper, at sagittis urna molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur mi massa, at faucibus orci sagittis sit amet. Vestibulum blandit lacus eu lorem ullamcorper, at sagittis urna molestie.'
      }
    ],
  },
  {
    id: '3',
    updated_at: '4 days ago',
    message_title: 'Lorem ipsum dolor sit amet ipsum dolor',
    broadcast: true,
    broadcastCategory: 'Meeting request',
    broadcastColor: 3,
    unread: false,
    archived: false,
    messages: [
      {
        created_at: '4 days ago',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur mi massa, at faucibus orci sagittis sit amet. Vestibulum blandit lacus eu lorem ullamcorper, at sagittis urna molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur mi massa, at faucibus orci sagittis sit amet. Vestibulum blandit lacus eu lorem ullamcorper, at sagittis urna molestie.'
      }
    ],
  }
];
