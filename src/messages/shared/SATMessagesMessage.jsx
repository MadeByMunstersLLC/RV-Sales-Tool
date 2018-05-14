import React, { Component, Fragment } from 'react';

import { Avatar } from '../../shared/avatar';
import { Chip } from '../../shared/chip';
import MaterialIcon from 'material-icons-react';

import SATMessagesMessageFooter from '../shared/SATMessagesMessageFooter';
import SATMessagesMessageHeader from '../shared/SATMessagesMessageHeader';

import messageStyles from '../../css/pages/messages.module.css';

class SATMessagesMessage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      match: props.match,
      data: props.data
    }
  }

  render() {
    var message = this.props.data.find(m => m.id === this.props.match.params.id);
    var messageData;

    if(message) {
      messageData =
      <div>
        <SATMessagesMessageHeader>
          <div className={`${messageStyles.left}`}>
            {!message.broadcast ? (
              <Chip
                chipAvatarText={message.message_title}
                chipTitle={message.message_title}
              />
            ) : (
              <h5>{message.message_title}</h5>
            )}
          </div>
          <div className={`${messageStyles.right}`}>
            {/* TODO:
              • Refactor actions to buttons */}
            <ul>
              <li>
                <MaterialIcon icon="archive" color="#D4D7DF" />
              </li>
              <li>
                <MaterialIcon icon="delete" color="#D4D7DF" />
              </li>
            </ul>
          </div>
        </SATMessagesMessageHeader>
        <div className={`${messageStyles.content__body} ${message.broadcast ? `${messageStyles.no_form}` : ''}`}>
          <ul className={`${messageStyles.message__list}`}>
            {message.messages.map((message, index) =>
              <li
                className={`${messageStyles.message__item} ${message.currrent_user ? `${messageStyles.right}` : `${messageStyles.left}`}`}
                key={index}>
                {!message.currrent_user && message.author ? (
                  <Avatar
                    avatarText={message.author}
                    avatarExtraClasses={`${messageStyles.avatar}`}
                  />
                ) : (
                  ''
                )}
                <div className={`${messageStyles.text__container}`}>
                  <div className={`${messageStyles.text}`}>
                    <h5>{message.message_to}</h5>
                    <p>{message.body}</p>
                  </div>
                  <p className={`${messageStyles.time}`}>Sent: <time>{message.created_at}</time></p>
                </div>
              </li>
            )}
          </ul>
        </div>
        {/* TODO:
          • Consider making this its own component */}
        {!this.props.messagesReadOnly ? (
          <SATMessagesMessageFooter />
        ) : ( '' )}
      </div>
    } else {
      messageData = <h2> Sorry. That message could not be found.</h2>;
    }

    return (
      <Fragment>
        {messageData}
      </Fragment>
    );
  }
}

export default SATMessagesMessage;
