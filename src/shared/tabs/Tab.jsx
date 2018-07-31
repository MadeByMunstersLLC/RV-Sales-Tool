import React from 'react';
import { NavLink } from "react-router-dom";

import tabStyles from '../../css/components/tabs.module.css';

export const Tab = ({
    tabText,
    tabUrl
  }) => (
  <li
    className={`${tabStyles.tab}`}
  >
    <NavLink
      to={tabUrl}
      className={`${tabStyles.tab__link}`}
      activeClassName={`${tabStyles.tab__active}`}>
      {tabText}
    </NavLink>
  </li>
)

export default Tab;
