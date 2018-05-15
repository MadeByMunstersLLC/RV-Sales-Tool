import React, { Fragment } from 'react';

import popoutStyles from 'css/components/popout.module.css';

export const PopoutTrigger = ({
    children
  }) => (
  <Fragment>
    <label
      htmlFor="popout"
      className={`${popoutStyles.popout__trigger}`}>{children}</label>
    <input
      type="checkbox"
      id="popout"
      className={`${popoutStyles.input}`} />
  </Fragment>
)

export default PopoutTrigger;
