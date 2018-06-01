import React from 'react';

export const SATWorkforceMarketplaceCalTopbar = ({
    label,
    onNavigate,
    topbarBtn = true,
    topbarBtnTitle
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
          <button type="button">{topbarBtnTitle}</button>
        }
      </span>
    </div>
  )
};

export default SATWorkforceMarketplaceCalTopbar;
