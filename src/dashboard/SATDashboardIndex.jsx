import React, { Component, Fragment } from 'react';

import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

import SATDashboardItem from 'dashboard/SATDashboardItem';
import PageContent from 'shared/layout/PageContent';
import PageHeader from 'shared/layout/PageHeader';

import dashboardStyles from 'css/pages/dashboard.module.css';

const SortableItem = SortableElement(({value}) =>
  <SATDashboardItem dashboardItemSize={value.size}>
    <p>Dashboard Widget</p>
  </SATDashboardItem>
);

const SortableList = SortableContainer(({items}) => {
  return (
    <div className={`${dashboardStyles.list}`}>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});

class SATDashboardIndex extends Component {
  state = {
    items: [
      {
        title: '1',
        size: 'sm'
      },
      {
        title: '2',
        size: 'md'
      },
      {
        title: '3',
        size: 'sm'
      },
      {
        title: '4',
        size: 'sm'
      },
      {
        title: '5',
        size: 'sm'
      },
      {
        title: '6',
        size: 'sm'
      },
    ],
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };

  render() {

    return (
      <Fragment>
        <PageHeader
          pageTitleLeft="Dashboard"
          pageTitleIconLeft="dashboard"
          pageTitleIconRight="view_compact" />
        <PageContent
          pageContentScroll={true}>
          <SortableList items={this.state.items} onSortEnd={this.onSortEnd} axis="xy" />
        </PageContent>
      </Fragment>
    );
  }
}

export default SATDashboardIndex;
