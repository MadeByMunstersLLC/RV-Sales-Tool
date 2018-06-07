import React, { Component, Fragment } from 'react';

import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader } from 'rv-unity-react';
import SATDashboardItem from 'dashboard/SATDashboardItem';
import PageContent from 'shared/layout/PageContent';
import PageHeader from 'shared/layout/PageHeader';

import dashboardStyles from 'css/pages/dashboard.module.css';

import 'rv-unity/src/css/components/buttons.css';
import 'rv-unity/src/css/components/modals.css';


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
    modalVisibility: false,
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };

  CustomizeDashboardToggle = () => {
    this.setState({
      modalVisibility: !this.state.modalVisibility
    })
  }

  render() {

    return (
      <Fragment>
        <Modal
          visible={this.state.modalVisibility}
        >
          <ModalHeader
            title="Customize Dashboard"
            description="Set the visibility of a widget by toggling it on or off"
            onClose={this.CustomizeDashboardToggle}
          />
          <ModalFooter>
            <Button
              label="Submit"
              size={0}
              onPress={() => undefined}
            />
          </ModalFooter>
        </Modal>
        <PageHeader
          pageTitleLeft="Dashboard"
          pageTitleIconLeft="dashboard"
          pageTitleIconRight="settings"
          pageTitleRightOnPress={this.CustomizeDashboardToggle}
        />
        <PageContent pageContentScroll={true}>
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
