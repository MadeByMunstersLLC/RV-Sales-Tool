import React, { Component, Fragment } from 'react';

import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

import SATDashboardItem from 'dashboard/SATDashboardItem';
import PageContent from 'shared/layout/PageContent';
import PageHeader from 'shared/layout/PageHeader';

import dashboardStyles from 'css/pages/dashboard.module.css';

import 'rv-unity/src/css/unity.css';
import unityButtons from 'rv-unity/src/css/components/buttons.css';
// import localButtons from 'css/buttons.css';
import {unityButtonSmall} from 'css/buttons.css';

import { Button } from 'rv-unity-react';

console.log(`unityButtons:`, unityButtons);
// console.log(`localButtons:`, localButtons);
console.log(`unityButtonSmall:`, unityButtonSmall);

const SortableItem = SortableElement(({value}) =>
  <SATDashboardItem
    dashboardItemSize={value.size}
  >
    <p>Dashboard Widget</p>
  </SATDashboardItem>
);

const SortableList = SortableContainer(({items}) => {
  return (
    <div className={`${dashboardStyles.list}`}>
      {items.map((value, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          value={value}
        />
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
          pageTitleIconRight="settings"
        />
        <PageContent pageContentScroll={true}>
          <Button label="label" onPress={() => (undefined)}/>
          <SortableList
            items={this.state.items}
            onSortEnd={this.onSortEnd}
            axis="xy"
          />
        </PageContent>
      </Fragment>
    );
  }
}

export default SATDashboardIndex;
