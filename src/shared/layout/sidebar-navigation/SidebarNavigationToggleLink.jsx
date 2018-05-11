import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import MaterialIcon from 'material-icons-react';

import sidebarStyles from '../../../css/modules/sidebar-navigation.module.css';

export class SidebarNavigationToggleLink extends Component {

  constructor(props) {

    super(props);

    this.state = {
      open: false
    };

    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle = () => this.setState({
    open: !this.state.open
  });

  render() {
    return (
      <li
        className={`${sidebarStyles.sidebar__item}`}
        onClick={this.menuToggle}
        open={this.state.open}>
        <div className={`${sidebarStyles.sidebar__link} ${this.state.open ? `${sidebarStyles.open}` : `${sidebarStyles.closed}`}`}>
          <span className={`${sidebarStyles.icon}`}>
            <MaterialIcon icon={this.props.sidebarNavLinkIcon} />
          </span>
          <span className={`${sidebarStyles.text}`}>
            {this.props.sidebarNavLinkText}
          </span>
          <span className={`${sidebarStyles.icon} ${sidebarStyles.toggle_icon} ${this.state.open ? `${sidebarStyles.open}` : `${sidebarStyles.closed}`}`}>
            <MaterialIcon icon="arrow_drop_down" />
          </span>
        </div>
        <ul className={`${sidebarStyles.sidebar__submenu} ${this.state.open ? `${sidebarStyles.open}` : `${sidebarStyles.closed}`}`}
          open={this.state.open}>
          {this.props.children}
        </ul>
      </li>
    );
  }
}

export default SidebarNavigationToggleLink;
