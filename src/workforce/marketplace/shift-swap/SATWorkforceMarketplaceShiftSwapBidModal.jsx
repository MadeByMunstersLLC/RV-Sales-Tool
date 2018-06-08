import React from 'react';

import moment from 'moment';

import {
  Button,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
  SingleInput,
  Textarea,
} from 'rv-unity-react';

export const SATWorkforceMarketplaceShiftSwapBidModal = ({
    event,
    eventModalVisibility,
    eventModalToggle,
    eventAddModal,
  }) => (

    // TODO:
      // • Need to hide the withdraw button if the user hasn't made a bid. Not sure of the data model at this time.

    <Modal
      visible={eventModalVisibility}
    >
      <ModalHeader
        title="Make An Offer"
        description="Fill out the form below to make an offer for this shift"
        onClose={() => eventModalToggle()}
      />
      <ModalBody>
        {!eventAddModal ?
          (
            <div>
              <Label id="details">Shift Details</Label>
              <p>Glenn Smith's shift on {moment(event.start).format('ll')} from {event.title}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia vulputate enim, vel molestie leo interdum eu.</p>
            </div>
          )
          : ('')
        }
        <form>
          <div className="grid__unity-grid">
            <div className="grid__unity-grid__span-columns-5">
              <SingleInput
                label="Shift Date"
                id="shift"
                type="date"
                placeholder="Select Date"
                onChange={() => undefined}
              />
            </div>
            <div className="grid__unity-grid__span-columns-1"></div>
            <div className="grid__unity-grid__span-columns-5">
              <Select
                id="shift_time"
                label="Shift Time"
                placeholder="Please Select One"
                onChange={() => undefined}
                options={mockShiftTimes}
              />
            </div>
          </div>
          {eventAddModal ?
            (
              <div className="grid__unity-grid">
                <Textarea
                  label="Reason"
                  id="reason"
                  placeholder="Enter short message"
                  onChange={() => undefined}
                />
              </div>
            ) : ('')
          }
        </form>
      </ModalBody>
      <ModalFooter>
        <div className="grid__unity-grid">
          <div className="grid__unity-grid__span-columns-4"></div>
          <div className="grid__unity-grid__span-columns-4">
            <Button
              label="Withdraw"
              type={1}
              onPress={() => undefined}
            />
          </div>
          <div className="grid__unity-grid__span-columns-4">
            <Button
              label="Submit"
              onPress={() => undefined}
            />
          </div>
        </div>
      </ModalFooter>
    </Modal>
)

export default SATWorkforceMarketplaceShiftSwapBidModal;

const mockShiftTimes = [
  { value: 'morning', label: 'AM Shift' },
  { value: 'evening', label: 'PM Shift' },
  { value: 'all_day', label: 'AM/PM Shifts' }
];
