import React, { Component, Fragment } from 'react';

import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Toggle } from 'rv-unity-react';
import SATDashboardItem from 'dashboard/SATDashboardItem';
import SATDashboardItemFiller from 'dashboard/SATDashboardItemFiller';
import PageContent from 'shared/layout/PageContent';
import PageHeader from 'shared/layout/PageHeader';

import dashboardStyles from 'css/pages/dashboard.module.css';
import modalStyles from 'css/components/modal.module.css';

const SortableItem = SortableElement(({
    value,
  }) => (
    <SATDashboardItem
      dashboardItemSize={value.size}
      value={value}
    />
  )
)

const SortableList = SortableContainer(({
  items,
  toggleModal
  }) => {
    return (
      <div className={`${dashboardStyles.list}`}>
        {items.map((value, index) => (
          <Fragment key={`item-${index}`}>
            {value.visibility ? (
              <SortableItem
                index={index}
                value={value}
              />
            ) : (
              ''
            )}
          </Fragment>
        ))}
        <SATDashboardItemFiller
          fillerTitle="Customize Your Dashboard"
          fillerBody="Add and remove widgets to optimize your workflow."
          fillerIcon="dashboard"
          onPress={toggleModal}
        />
      </div>
    );
});

const WidgetList = ({data}) => {
  return (
    <ul className={`${modalStyles.list}`}>
      {data.map((item, index) => (
        <li
          key={index}
          className={`
            ${modalStyles.item}
            ${item.visibility ? `${modalStyles.active}` : ''}
          `}
        >
          <span className={`${modalStyles.item__title}`}>
            {item.title}
          </span>
          <span className={`${modalStyles.item__action}`}>
            <Toggle
              label=" "
              id={item.id}
              checked={item.visibility}
              name={item.title}
              onChange={() => undefined}
              value={item.id}
            />
          </span>
        </li>
      ))}
    </ul>
  )
}

class SATDashboardIndex extends Component {
  state = {
    items: mockDashboardWidgets,
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
          <ModalBody>
            <WidgetList
              data={mockDashboardWidgets}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              label="Update Dashboard"
              size={0}
              onPress={this.CustomizeDashboardToggle}
            />
          </ModalFooter>
        </Modal>
        <PageHeader
          pageTitleLeft="Dashboard"
          pageTitleIconLeft="dashboard"
          pageTitleIconRight="settings"
          pageTitleRightOnPress={this.CustomizeDashboardToggle}
        />
        <PageContent
          pageContentScroll={true}
        >
          <SortableList
            items={this.state.items}
            onSortEnd={this.onSortEnd}
            toggleModal={this.CustomizeDashboardToggle}
            axis="xy"
          />
        </PageContent>
      </Fragment>
    );
  }
}

export default SATDashboardIndex;

const mockDashboardWidgets = [
  {
    id: '0',
    title: 'Agent Attendance',
    visibility: true,
    size: 'sm'
  },
  {
    id: '1',
    title: 'Event Calendar',
    visibility: true,
    size: 'sm'
  },
  {
    id: '2',
    title: 'Fundemental Five',
    visibility: true,
    size: 'sm'
  },
  {
    id: '3',
    title: 'Compensation Overview',
    visibility: true,
    size: 'md'
  },
  {
    id: '4',
    title: 'Compliance',
    visibility: true,
    size: 'sm'
  },
  {
    id: '5',
    title: 'MSA Program',
    visibility: true,
    size: 'sm'
  },
  {
    id: '6',
    title: 'Bake Multiplier / Commission',
    visibility: true,
    size: 'sm'
  }
]
