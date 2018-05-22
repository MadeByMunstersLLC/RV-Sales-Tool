import React from 'react';
import { NavLink } from "react-router-dom";

import MaterialIcon from 'material-icons-react';

import { Avatar } from 'shared/avatar';
import {
  Popout,
  PopoutBody,
  PopoutContainer,
  PopoutHeader,
  PopoutTrigger } from '../../shared/popout/';

import layout from '../../css/global/layout.module.css';
import typographyStyles from '../../css/global/typography.module.css';
import popoutStyles from '../../css/components/popout.module.css';
import topbarStyles from '../../css/modules/topbar-navigation.module.css';

const NotificationList = ({items}) => {
  return (
    <ul className={`${popoutStyles.popout__list}`}>
      {items.map((item, index) =>
        <li
          key={index}
          className={`${popoutStyles.popout__item}`}>
          <NavLink
            to={item.route}>
            <div className={`${popoutStyles.popout__text}`}>
              <h5 className={`${item.unread ? `${popoutStyles.icon}` : '' }`}>{item.title}</h5>
              <p className={`${typographyStyles.text_gray}`}>{item.description}</p>
            </div>
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export const TopbarNavigation = ({items = []}) => (
  <header role="banner" className={`${topbarStyles.topbar} ${layout.page__body}`}>
    <nav className={`${topbarStyles.topbar__nav} ${topbarStyles.right}`}>
      <ul className={`${topbarStyles.topbar__list}`}>
        <li className={`${topbarStyles.topbar__item}`}>
          <PopoutContainer>
            <PopoutTrigger
              popoutId="topbar-notifications">
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
