import React, { Fragment } from 'react';

export const SATWorkforceMarketplaceCalTopbar = ({
    label,
    onNavigate,
    topbarBtnTitle
  }) => {
  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button onClick={() => onNavigate("TODAY")} type="button">today</button>
        <button onClick={() => onNavigate("PREV")} type="button">back</button>
        <button onClick={() => onNavigate("NEXT")} type="button">next</button>
      </span>
      <span className="rbc-toolbar-label">{label}</span>
      <span>
        <button type="button">{topbarBtnTitle}</button>
      </span>
    </div>
  )
};

export default SATWorkforceMarketplaceCalTopbar
