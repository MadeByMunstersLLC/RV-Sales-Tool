import React from 'react';

import moment from 'moment';

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'rv-unity-react';

export const SATWorkforceMarketplaceTimeoffModal = ({
    modalVisibility,
    modalToggle,
    events = [],
  }) => (

    <Modal
      visible={modalVisibility}
    >
      <ModalHeader
        title="Make An Offer"
        description="Fill out the form below to make an offer for this shift"
        onClose={() => modalToggle()}
      />
      <ModalBody>
        <ul>
        {events.map(event => (
          <li>{event.title}</li>
        ))}
        </ul>
      </ModalBody>
      <ModalFooter>

      </ModalFooter>
    </Modal>
)

export default SATWorkforceMarketplaceTimeoffModal;
