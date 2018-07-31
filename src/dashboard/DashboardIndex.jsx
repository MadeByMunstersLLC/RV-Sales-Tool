import React, { Component, Fragment } from 'react';

import { SortableContainer, arrayMove } from 'react-sortable-hoc';

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Toggle } from 'rv-unity-react';
import DashboardAttendanceWidget from './shared/DashboardAttendanceWidget';
import DashboardBankWidget from './shared/DashboardBankWidget';
import DashboardCompensationWidget from './shared/DashboardCompensationWidget';
import DashboardComplianceWidget from './shared/DashboardComplianceWidget';
import DashboardEventCalWidget from './shared/DashboardEventCalWidget';
import DashboardFunFiveWidget from './shared/DashboardFunFiveWidget';
import DashboardMsaWidget from './shared/DashboardMsaWidget';
import DashboardRedCoinWidget from './shared/DashboardRedCoinWidget';
import DashboardItemFiller from './shared/DashboardItemFiller'
import PageContent from '../shared/layout/PageContent';
import PageHeader from '../shared/layout/PageHeader';

import dashboardStyles from '../css/pages/dashboard.module.css';
import modalStyles from '../css/components/modal.module.css';

// TODO:
  // • Need to map API dashbaord widget key to front end React component once API is created

const AVAILABLE_WIDGETS = [
  {
    id: '0',
    title: 'Agent Attendance',
    visibility: true,
    size: 'sm',
    component: DashboardAttendanceWidget,
  },
  {
    id: '1',
    title: 'Event Calendar',
    visibility: true,
    size: 'sm',
    component: DashboardEventCalWidget,
  },
  {
    id: '2',
    title: 'Fundemental Five',
    visibility: true,
    size: 'sm',
    component: DashboardFunFiveWidget,
  },
  {
    id: '3',
    title: 'Compensation Overview',
    visibility: true,
    size: 'md',
    component: DashboardCompensationWidget,
  },
  {
    id: '4',
    title: 'Compliance',
    visibility: true,
    size: 'sm',
    component: DashboardComplianceWidget,
  },
  {
    id: '5',
    title: 'MSA Program',
    visibility: true,
    size: 'sm',
    component: DashboardMsaWidget,
  },
  {
    id: '6',
    title: 'Bank Multiplier / Commission',
    visibility: true,
    size: 'sm',
    component: DashboardBankWidget,
  },
  {
    id: '7',
    title: 'Red Coin',
    visibility: true,
    size: 'sm',
    component: DashboardRedCoinWidget,
  },
];

const SortableList = SortableContainer(({
  toggleModal,
  widgets = [],
  }) => {

    return (
      <div className={`${dashboardStyles.list}`}>
        {widgets.map((widget, index) => {
          const WidgetComponent = widget.component;

          return (
            <WidgetComponent
              {...widget}
              key={index}
              index={index}
            />
          )
        })}
        <DashboardItemFiller
          fillerTitle="Customize Your Dashboard"
          fillerBody="Add and remove widgets to optimize your workflow."
          fillerIcon="dashboard"
          onPress={toggleModal}
        />
      </div>
    );
});

const WidgetList = ({
    availableWidgets,
    onUpdateWidgetVisibility,
  }) => {

  return (
    <ul className={`${modalStyles.list}`}>
      {availableWidgets.map((item, index) => (
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
              onChange={() => onUpdateWidgetVisibility(item.id, !item.visibility)}
              value={item.id}
            />
          </span>
        </li>
      ))}
    </ul>
  )
}

class DashboardIndex extends Component {
  state = {
    availableWidgets: AVAILABLE_WIDGETS,
    modalVisibility: false,
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      availableWidgets: arrayMove(this.state.availableWidgets, oldIndex, newIndex),
    });
  };

  customizeDashboardToggle = () => {
    this.setState({
      modalVisibility: !this.state.modalVisibility
    })
  }

  render() {
    const visibleWidgets = this.state.availableWidgets.filter(widget => widget.visibility);

    return (
      <Fragment>
        <Modal
          visible={this.state.modalVisibility}
        >
          <ModalHeader
            title="Customize Dashboard"
            description="Set the visibility of a widget by toggling it on or off."
            onClose={this.customizeDashboardToggle}
          />
          <ModalBody>
            <WidgetList
              availableWidgets={this.state.availableWidgets}
              onUpdateWidgetVisibility={(widgetId, isVisible) => {
                this.setState(
                  (prevState) => {
                    const widget = prevState.availableWidgets.find(widget => widget.id === widgetId);
                    const widgetIndex = prevState.availableWidgets.indexOf(widget);
                    widget.visibility = isVisible;

                    const newAvailableWidgets = [
                      ...prevState.availableWidgets.slice(0, widgetIndex),
                      widget,
                      ...prevState.availableWidgets.slice(widgetIndex + 1),
                    ];

                    return {
                      ...prevState,
                      availableWidgets: newAvailableWidgets
                    };
                  }
                )
              }}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              label="Update Dashboard"
              size={0}
              onPress={this.customizeDashboardToggle}
            />
          </ModalFooter>
        </Modal>
        <PageHeader
          pageTitleLeft="Dashboard"
          pageTitleIconLeft="dashboard"
          pageTitleIconRight="settings"
          pageTitleRightOnPress={this.customizeDashboardToggle}
        />
        <PageContent
          pageContentScroll={true}
        >
          <SortableList
            items={this.state.items}
            onSortEnd={this.onSortEnd}
            toggleModal={this.customizeDashboardToggle}
            axis="xy"
            widgets={visibleWidgets}
          />
        </PageContent>
      </Fragment>
    );
  }
}

export default DashboardIndex;
