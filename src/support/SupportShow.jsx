import React, { Component, Fragment } from 'react';

import {
  Card,
  CardBody
} from 'rv-unity-react';
import SupportQuestionModal from './shared/SupportQuestionModal';

import PageBlankState from '../shared/layout/PageBlankState';
import SupportArticle from '../support/shared/SupportArticle';

import cardStyles from 'css/components/card.module.css';

class SupportShow extends Component {

  state = {
    modalVisibility: false,
  }

  toggleVizValue = (visValProp) => {
    this.setState({
      [visValProp]: !this.state[visValProp],
    });
  };

  render() {
    var item = this.props.data.find(i => i.id === this.props.match.params.id);
    var itemData;

    if(item) {
      itemData =
        <Card>
          <CardBody>
            <SupportArticle
              modalVisibilityToggle={() => this.toggleVizValue('modalVisibility')}
              data={item}
            />
          </CardBody>
        </Card>
    } else {
      itemData =
        <div className={`${cardStyles.card} ${cardStyles.md}`}>
          <PageBlankState
            blankStateIcon="help"
            blankStateText="Hmmm? We can't find that document thread."
          />
        </div>
    }

    return (
      <Fragment>
        <SupportQuestionModal
          modalVisibility={this.state.modalVisibility}
          modalVisibilityToggle={() => this.toggleVizValue('modalVisibility')}
        />
        {itemData}
      </Fragment>
    );
  }
}

export default SupportShow;
