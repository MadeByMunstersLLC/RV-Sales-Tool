import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";

import { Alert } from 'shared/alert/';
import PageBlankState from 'shared/layout/PageBlankState';
import {
  Popout,
  PopoutBody,
  PopoutContainer,
  PopoutList,
  PopoutItem,
  PopoutTrigger } from '../../shared/popout/';
import SATMessagesAside from 'messages/shared/SATMessagesAside';
import SATMessagesAsideHeader from 'messages/shared/SATMessagesAsideHeader';
import SATMessagesAsideHeaderActionButton from 'messages/shared/SATMessagesAsideHeaderActionButton';
import SATMessagesAsideHeaderActionList from 'messages/shared/SATMessagesAsideHeaderActionList';
import SATMessagesAsideHeaderActionItem from 'messages/shared/SATMessagesAsideHeaderActionItem';
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

  removeMessage(e, id) {
    e.stopPropagation();
    e.preventDefault();

    const newState = this.state;
    const index = newState.messages.findIndex(m => m.id === id);

    if (index === -1) return;
    newState.messages.splice(index, 1);

    this.setState({
      newState,
      deleteAlert: true
    });
  };

  archiveMessage(e, id) {
    e.stopPropagation();
    e.preventDefault();

    // TODO:
      // • Update opbject on data model for message to hide archived message from:
      // • Unread List
      // • All Message List

    console.log(id);
  }

  render() {

    return (
      <Fragment>
        { this.state.deleteAlert &&
          <Alert
            alertText="You have successfully deleted a message."
            alertIcon="info"
            alertType={1}
          />
        }
        <div className={`${cardStyles.card} ${cardStyles.full} ${messageStyles.container}`}>
          <SATMessagesAside>
            <SATMessagesAsideHeader>
              <SATMessagesAsideHeaderActionList>
                <li className={`${messageStyles.action__item} ${messageStyles.broadcast__main}`}>
                  <input type="search" placeholder="Search for a message" />
                </li>
                <SATMessagesAsideHeaderActionItem>
                  <PopoutContainer>
                    <PopoutTrigger
                      popoutId="mail-filter">
                      <SATMessagesAsideHeaderActionButton
                        actionItemIcon="filter_list"
                        actionItemIconColor="#20CD8E"
                      />
                    </PopoutTrigger>
                    <Popout>
                      <PopoutBody>
                        <PopoutList>
                          <PopoutItem
                            itemText="All Messages"
                          />
                          <PopoutItem
                            itemText="Unread Messages"
                          />
                          <PopoutItem
                            itemText="Archived Messages"
                          />
                        </PopoutList>
                      </PopoutBody>
                    </Popout>
                  </PopoutContainer>
                </SATMessagesAsideHeaderActionItem>
              </SATMessagesAsideHeaderActionList>

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
      </Fragment>
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
