import React, { Fragment } from 'react';

import popoutStyles from 'css/components/popout.module.css';

export const PopoutTrigger = ({
    children,
    popoutId
  }) => (
  <Fragment>
    <label
      htmlFor={popoutId}
      className={`${popoutStyles.popout__trigger}`}>
      {children}
    </label>
    <input
      type="checkbox"
      id={popoutId}
      className={`${popoutStyles.input}`}
    />
  </Fragment>
)

export default PopoutTrigger;
