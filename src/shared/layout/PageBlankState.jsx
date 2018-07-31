import React from 'react';

import MaterialIcon from 'material-icons-react';

import layoutStyles from '../../css/global/layout.module.css';

export const PageBlankState = ({
  blankStateIcon,
  blankStateText
}) => (
  <div className={`${layoutStyles.page__blank}`}>
    <MaterialIcon icon={blankStateIcon} color="#D4D7DF" size="96px" />
    <h4 className={`${layoutStyles.title}`}>{blankStateText}</h4>
  </div>
)

export default PageBlankState;
