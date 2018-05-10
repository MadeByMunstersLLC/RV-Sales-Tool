import React from 'react';

import popoutStyles from '../../css/components/popout.module.css';

export const PopoutHeader = ({
  popoutHeaderText
}) => (
  <div className={`${popoutStyles.popout_header}`}>
    <h3>{popoutHeaderText}</h3>
  </div>
)

export default PopoutHeader;
