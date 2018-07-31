import React, { Component } from 'react';

import {
  SidebarNavigationFooter,
  SidebarNavigationHeader } from './';

import layout from '../../../css/global/layout.module.css';
import sidebarStyles from '../../../css/modules/sidebar-navigation.module.css';

class SidebarNavigation extends Component {

  state = {
    sideNavClosed: false,
  }

  toggleSideNav = () => {
    this.setState({
      sideNavClosed: !this.state.sideNavClosed,
    })
  }

  render() {

    return (
      <nav className={`${sidebarStyles.sidebar} ${layout.page__sidebar}
        ${this.state.sideNavClosed ? `${layout.sidebar__closed}` : `${layout.sidebar__open}`} `}>
        <SidebarNavigationHeader
          sidebarNavTitle={this.props.sidebarHeaderTitle} />
        {this.props.children({
          isSidebarExpanded: !this.state.sideNavClosed,
          updateSidebarState: this.toggleSideNav,
        })}
        <SidebarNavigationFooter
          toggleSideNavTrigger={() => this.toggleSideNav()}
        />
      </nav>
    );
  }
}

export default SidebarNavigation;
