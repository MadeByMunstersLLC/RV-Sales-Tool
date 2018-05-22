import React, { Component, Fragment } from 'react';

import PageBlankState from 'shared/layout/PageBlankState';

class SATSupportShow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      match: props.match,
      data: props.data
    }
  }

  render() {
    var item = this.props.data.find(i => i.id === this.props.match.params.id);
    var itemData;

    if(item) {
      itemData =
        <div>
          {item.title}
        </div>
    } else {
      itemData =
        <PageBlankState
          blankStateIcon="help"
          blankStateText="Hmmm? We can't find that document thread."
        />
    }

    return (
      <Fragment>
        {itemData}
      </Fragment>
    );
  }
}

export default SATSupportShow;
