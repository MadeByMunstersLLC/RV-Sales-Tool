import React,  { Fragment } from 'react';

import {
  SingleInput,
  Select,
} from 'rv-unity-react';

import modalStyles from 'css/components/modal.module.css';

// TODO:
  // • Wire up form

export const SATCalendarNewCalForm = ({
    formVisibility,
    formVisibilityToggle,
  }) => {
  return (
    <Fragment>
      <a
        onClick={() => formVisibilityToggle()}
        className={`${modalStyles.form__action}`}
      >
        {formVisibility ? 'Cancel' : 'Add Calendar'}
      </a>
      <form
        className={`
          ${modalStyles.form}
          ${formVisibility ? `${modalStyles.active}` : `${modalStyles.hidden}`}
          grid__unity-grid
        `}
      >
        <SingleInput
          id="title"
          value=""
          type="text"
          placeholder="Ex. Personal"
          classes="grid__unity-grid__span-columns-6"
          label="Calendar Title"
          onChange={() => undefined}
        />
        <Select
          label="Calendar Color"
          id="color"
          value=""
          onChange={() => undefined}
          placeholder="Select One"
          options={mockCalendarColors}
        />
      </form>
    </Fragment>
  )
};

export default SATCalendarNewCalForm;

const mockCalendarColors = [
  {
    id: '0',
    value: 'Blue',
    label: 'Blue',
  },
  {
    id: '1',
    value: 'Green',
    label: 'Green',
  },
  {
    id: '2',
    value: 'Orange',
    label: 'Orange',
  },
];
