import React from 'react';

import MaterialIcon from 'material-icons-react';

import Avatar from '../../shared/avatar/Avatar.jsx';
import {
  Popout,
  PopoutBody,
  PopoutContainer,
  PopoutHeader,
  PopoutTrigger } from '../../shared/popout/';

import layout from '../../css/global/layout.module.css';
import popoutStyles from '../../css/components/popout.module.css';
import topbarStyles from '../../css/modules/topbar-navigation.module.css';

const NotificationList = ({items}) => {
  return (
    <ul className={`${popoutStyles.popout_list}`}>
      {items.map((item, index) =>
        <li
          key={index}
          className={`${popoutStyles.popout_item}`}>
          <h5 className={`${item.unread ? `${popoutStyles.popout_item_icon}` : '' }`}>{item.title}</h5>
          <p>{item.description}</p>
        </li>
      )}
    </ul>
  );
};

export const TopbarNavigation = ({items = []}) => (
  <header className={`${topbarStyles.topbar} ${layout.page__body}`}>
    <nav className={`${topbarStyles.topbar__nav} ${topbarStyles.right}`}>
      <ul className={`${topbarStyles.topbar__list}`}>
        <li className={`${topbarStyles.topbar__item}`}>
          <PopoutContainer>
            <PopoutTrigger>
              <MaterialIcon icon="notifications_none" color="#20CD8E" />
            </PopoutTrigger>
            <Popout>
              <PopoutHeader
                popoutHeaderText="Notifications" />
              <PopoutBody popoutBodyClasses={`${topbarStyles.popout}`}>
                <NotificationList items={items} />
              </PopoutBody>
            </Popout>
          </PopoutContainer>
        </li>
        <li className={`${topbarStyles.topbar__item}`}>
          <Avatar avatarText="Kurt Cunningham" />
        </li>
      </ul>
    </nav>
  </header>
)

export default TopbarNavigation;
