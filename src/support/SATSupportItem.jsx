import React from 'react';

// Unity Components
import { CardBody, Button } from 'rv-unity-react';

// Unity Styles
import 'rv-unity/src/css/base/variables.css';
import 'rv-unity/src/css/components/cards.css';
import 'rv-unity/src/css/components/buttons.css';

export const SATSupportItem = ({
    post
  }) => (
    <CardBody>
      <ul>
        <li><p>{post.title}</p></li>
        <li><p>{post.created_on}</p></li>
        <li><p>{post.created_on}</p></li>
        <li>
          <Button label="label" onPress={`/support/${post.id}`}/>
        </li>
      </ul>
    </CardBody>
)

export default SATSupportItem;
