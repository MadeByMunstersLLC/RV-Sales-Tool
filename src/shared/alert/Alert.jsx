import React from 'react';
import * as classNames from 'classnames';

import MaterialIcon from 'material-icons-react';

import alertStyles from 'css/components/alert.module.css';

export const AlertTypes = {
  PRIMARY: 0,
  SUCCESS: 1,
  CAUTION: 2,
  DANGER: 3,
}

export const Alert = ({
  alertText,
  alertType,
  alertIcon,
}) => {
  const alertClasses: string = classNames({
    [`${alertStyles.alert}`]: true,
    [`${alertStyles.primary}`]: alertType === AlertTypes.PRIMARY,
    [`${alertStyles.success}`]: alertType === AlertTypes.SUCCESS,
    [`${alertStyles.caution}`]: alertType === AlertTypes.CAUTION,
    [`${alertStyles.danger}`]: alertType === AlertTypes.DANGER,
  });

  return(
    <figure className={`${alertClasses}`}>
      <MaterialIcon icon={alertIcon} color="#FFFFFF" />
      <p className={`${alertStyles.alert__text}`}>{alertText}</p>
    </figure>
  )
}

export default Alert;
