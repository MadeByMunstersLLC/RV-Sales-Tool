import React, { Component, Fragment } from 'react';

import {
  Card,
  CardBody
} from 'rv-unity-react';
import SATSupportQuestionModal from 'support/shared/SATSupportQuestionModal';

import PageBlankState from 'shared/layout/PageBlankState';
import SATSupportArticle from 'support/shared/SATSupportArticle';

import cardStyles from 'css/components/card.module.css';

class SATSupportShow extends Component {

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
            <SATSupportArticle
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
        <SATSupportQuestionModal
          modalVisibility={this.state.modalVisibility}
          modalVisibilityToggle={() => this.toggleVizValue('modalVisibility')}
        />
        {itemData}
      </Fragment>
    );
  }
}

export default SATSupportShow;
