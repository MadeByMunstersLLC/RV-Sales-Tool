import React from 'react';

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
  Textarea,
} from 'rv-unity-react';

export const SupportQuestionModal = ({
  modalVisibility,
  modalVisibilityToggle,
}) => (
  <Modal
  visible={modalVisibility}
  >
    <ModalHeader
      title="Ask A Question"
      description="Don't see your question in the list below? Please send us your question directly."
      onClose={() => modalVisibilityToggle()}
    />
    <ModalBody>
      <form>
        <Select
          id="category"
          value=""
          label="Support Category"
          placeholder="Please select one"
          options={mockSupportCategories}
          onChange={() => undefined}
        />
        <Textarea
          id="question"
          label="Your Question"
          value=""
          placeholder="Place question here"
          onChange={() => undefined}
        />
      </form>
    </ModalBody>
    <ModalFooter>
      <Button
        label="Sumbit"
        onPress={() => undefined}
      />
    </ModalFooter>
  </Modal>
)

export default SupportQuestionModal;

const mockSupportCategories = [
  {label: 'Category A', value: 'Category A'},
  {label: 'Category B', value: 'Category B'},
  {label: 'Category C', value: 'Category C'},
];
