import React from 'react';

const clickHandle = (e, props) => {
  e.stopPropagation();
  e.preventDefault();
  window.shell.openExternal(props)
}

export const ExternalAppLink = ({
    children,
    linkUrl
  }) => {

    return (
      <span
        onClick={(e) => clickHandle(e, linkUrl)}>
        {children}
      </span>
    )
  }

export default ExternalAppLink;
