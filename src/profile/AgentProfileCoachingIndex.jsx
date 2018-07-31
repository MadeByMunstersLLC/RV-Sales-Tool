import React, { Component, Fragment } from 'react';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Textarea,
} from 'rv-unity-react';
import PageBlankState from 'shared/layout/PageBlankState';

import supportStyles from 'css/pages/support.module.css';

class AgentProfileCoachingIndex extends Component {

  state = {
    feedbackModalVisibility: false,
  }

  toggleFeedbackModal = () => {
    this.setState({
      feedbackModalVisibility: !this.state.feedbackModalVisibility,
    })
  }

  render() {
    var coaching = this.props.data.find(i => i.id === this.props.match.params.id);
    var coachingData;

    if(coaching) {
      coachingData =
      <Fragment>
        <Modal
          visible={this.state.feedbackModalVisibility}
        >
          <ModalHeader
            title="Provide Feedback"
            description="Please add your comments below."
            onClose={() => this.toggleFeedbackModal()}
          />
          <ModalBody>
            <form>
              <Textarea
                label="Feedback"
                id="feedback"
                value=""
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
        <Card>
          <CardHeader>
            Coaching // Call {coaching.call_id}
            <Button
              label="Provide Feedback"
              onPress={() => this.toggleFeedbackModal()}
            />
          </CardHeader>
          <CardBody>
            <header className={`${supportStyles.article__header}`}>
              <ul className="grid__unity-grid">
                <li className="grid__unity-grid__span-columns-4">
                  <Label id="date">
                    DATE
                  </Label>
                  {coaching.date}
                </li>
                <li className="grid__unity-grid__span-columns-4">
                  <Label id="date">
                    COACHING BY
                  </Label>
                  {coaching.coaching_by}
                </li>
                <li className="grid__unity-grid__span-columns-4">
                  <Label id="date">
                    COACHING CATEGORY
                  </Label>
                  {coaching.coaching_category}
                </li>
              </ul>
            </header>
            {coaching.coaching_report.map((item, index) =>
              <div key={index}>
                <Label id="coaching-label">
                  {item.label}
                </Label>
                <p>{item.value}</p>
              </div>
            )}
          </CardBody>
        </Card>
      </Fragment>
    } else {
      coachingData =
      <Card>
        <CardBody>
          <PageBlankState
            blankStateIcon="help"
            blankStateText="Hmmm? We can't find that coaching."
          />
        </CardBody>
      </Card>
    }

    return (
      <Fragment>
        {coachingData}
      </Fragment>
    )
  }
}

export default AgentProfileCoachingIndex;
