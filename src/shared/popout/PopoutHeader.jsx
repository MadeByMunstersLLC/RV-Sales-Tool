import React from 'react';

import popoutStyles from 'css/components/popout.module.css';

export const PopoutHeader = ({
  popoutHeaderText
}) => (
  <div className={`${popoutStyles.popout__header}`}>
    <h3>{popoutHeaderText}</h3>
  </div>
)

export default PopoutHeader;
