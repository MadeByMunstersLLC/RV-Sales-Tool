import React, { Component } from 'react';
import { NavLink, Route, Switch } from "react-router-dom";

import PageBlankState from '../../shared/layout/PageBlankState';
import SATMailCreate from './SATMailCreate';
import SATMessagesAside from '../shared/SATMessagesAside';
import SATMessagesAsideHeader from '../shared/SATMessagesAsideHeader';
import SATMessagesContent from '../shared/SATMessagesContent';
import SATMessagesList from '../shared/SATMessagesList';
import SATMessagesMessage from '../shared/SATMessagesMessage';

import cardStyles from '../../css/components/card.module.css';
import messageStyles from '../../css/pages/messages.module.css';

class SATMailIndex extends Component {

  render() {

    return (
      <div className={`${cardStyles.card} ${cardStyles.full} ${messageStyles.container}`}>
        <SATMessagesAside>
          <SATMessagesAsideHeader>
            <NavLink
              to="/messages/mail/create">
              <button>New Message</button>
            </NavLink>
          </SATMessagesAsideHeader>
          <SATMessagesList
            messageRoute="mail"
            items={mockMessageItems} />
        </SATMessagesAside>
        <SATMessagesContent>
          <Switch>
            <Route
              exact
              path="/messages/mail/"
              render={ () =>
                <PageBlankState
                  blankStateIcon="mail"
                  blankStateText="Your messages" />
              }
            />
            <Route
              path="/messages/mail/create"
              component={SATMailCreate}
            />
            <Route
              path="/messages/mail/:id"
              render={ (props) =>
                <SATMessagesMessage
                  messagesReadOnly={false}
                  data={mockMessageItems} {...props} />
              }
            />
          </Switch>
        </SATMessagesContent>
      </div>
    );
  }
}

export default SATMailIndex;

const mockMessageItems = [
  {
    id: '1',
    message_title: 'Caitlyn Zahn',
    broadcast: false,
    messages: [
      {
        created_at: '22 mins ago',
        currrent_user: false,
        author: 'Caitlyn Zahn',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur mi massa, at faucibus orci sagittis sit amet. Vestibulum blandit lacus eu lorem ullamcorper, at sagittis urna molestie.'
      },
    ],
  },
  {
    id: '2',
    message_title: 'Clay Carpenter',
    broadcast: false,
    messages: [
      {
        created_at: '3 day ago',
        currrent_user: true,
        author: 'Kurt Cunningham',
        body: 'Lorem ipsum dolor sit amet?'
      },
      {
        created_at: '2 days ago',
        currrent_user: false,
        author: 'Clay Carpenter',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur mi massa, at faucibus orci sagittis sit amet.'
      },
      {
        created_at: '1 day ago',
        currrent_user: true,
        author: 'Kurt Cunningham',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur mi massa, at faucibus orci sagittis sit amet. Vestibulum blandit lacus eu lorem ullamcorper, at sagittis urna molestie.'
      },
      {
        created_at: '1 day ago',
        currrent_user: false,
        author: 'Clay Carpenter',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur mi massa, at faucibus orci sagittis sit amet.'
      },
      {
        created_at: '2 minutes ago',
        currrent_user: true,
        author: 'Kurt Cunningham',
        body: ':)'
      }
    ],
  },
  {
    id: '3',
    message_title: 'Bonnie Adams',
    broadcast: false,
    messages: [
      {
        created_at: '1 day ago',
        currrent_user: true,
        author: 'Kurt Cunningham',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?'
      },
      {
        created_at: '1 day ago',
        currrent_user: false,
        author: 'Bonnie Adams',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur mi massa, at faucibus orci sagittis sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur mi massa, at faucibus orci sagittis sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur mi massa, at faucibus orci sagittis sit amet.'
      },
    ],
  }
];
