import React from 'react';

import moment from 'moment';

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'rv-unity-react';

import modalStyles from 'css/components/modal.module.css';

export const SATWorkforceMarketplaceTimeoffModal = ({
    modalVisibility,
    modalToggle,
    events = [],
  }) => {

  return(
    <Modal
      visible={modalVisibility}
    >
      <ModalHeader
        title="PTO Request"
        description="Please confirm your selected dates below."
        onClose={() => modalToggle()}
      />
      <ModalBody>
        <ul>
          {events.length > 0 ?
              events.map(event => (
                <li className={`${modalStyles.item}`} key={event.id}>
                  <span>{moment(event.start).format('ll')} - {event.title}</span>
                  <a className={`${modalStyles.item__action}`}>Remove</a>
                </li>
              ))
            :
              <li className={`${modalStyles.item}`}>No events selected</li>
          }
        </ul>
      </ModalBody>
      <ModalFooter>
        <Button
          label="Submit Request"
          onPress={() => undefined}
        />
      </ModalFooter>
    </Modal>
  )
}

export default SATWorkforceMarketplaceTimeoffModal;
