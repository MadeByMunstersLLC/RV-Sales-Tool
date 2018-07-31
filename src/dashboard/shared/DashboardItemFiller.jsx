import * as React from 'react';
import * as classNames from 'classnames';

import MaterialIcon from 'material-icons-react';

import dashboardStyles from '../../css/pages/dashboard.module.css';
import typographstyles from '../../css/global/typography.module.css';

export const DashboardItemFiller = ({
  fillerTitle,
  fillerBody,
  fillerIcon,
  onPress,
}: DashboardFillerItemProps) => {
  const dashboardFillerItemClasses: string = classNames({
    [`${dashboardStyles.item}`]: true,
    [`${dashboardStyles.item}-sm`]: true,
  });

  return(

    <div className={dashboardFillerItemClasses}>
      <div
        className={`${dashboardStyles.item__filler}`}
        onClick={() => onPress()}
      >
        <div className={`${dashboardStyles.filler__body}`}>
          <div>
            <MaterialIcon icon={fillerIcon} color="#999B9E" size="40px" />
            <h4 className={`${dashboardStyles.title}`}>{fillerTitle}</h4>
            <p className={`${dashboardStyles.description} ${typographstyles.text_gray}`}>{fillerBody}</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default DashboardItemFiller;
