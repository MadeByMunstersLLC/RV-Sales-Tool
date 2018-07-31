import React from 'react';

import  {
  Button
} from 'rv-unity-react';

export const WorkforceMarketplaceCalTopbar = ({
    label,
    onNavigate,
    topbarBtn = true,
    topbarBtnTitle,
    topbarBtnEvent,
  }) => {
  return (
    <div className="rbc-toolbar rbc-toolbar-workforce">
      <span className="rbc-btn-group">
        <button onClick={() => onNavigate("TODAY")} type="button">today</button>
        <button onClick={() => onNavigate("PREV")} type="button">back</button>
        <button onClick={() => onNavigate("NEXT")} type="button">next</button>
      </span>
      <span className="rbc-toolbar-label">{label}</span>
      <span className="rbc-toolbar-action">
        {topbarBtn &&
          <Button
            type={0}
            label={topbarBtnTitle}
            size={2}
            onPress={() => topbarBtnEvent()}
          />
        }
      </span>
    </div>
  )
};

export default WorkforceMarketplaceCalTopbar;
