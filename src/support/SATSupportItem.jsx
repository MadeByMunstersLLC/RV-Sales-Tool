import React, { Fragment } from 'react';

// Unity Components
import { CardBody, Button } from 'rv-unity-react';

// Unity Styles
import 'rv-unity/src/css/base/variables.css';
import 'rv-unity/src/css/components/cards.css';
import 'rv-unity/src/css/components/buttons.css';

export const SATSupportItem = ({
    post
  }) => (
      <Fragment>
        <td width="40%"><p>{post.title}</p></td>
        <td width="20%"><p>{post.created_on}</p></td>
        <td width="20%"><p>{post.updated_last}</p></td>
        <td width="20%">
          <Button label="Read More" onPress={() => (undefined)}/>
        </td>
      </Fragment>
)

export default SATSupportItem;
