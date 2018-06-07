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
    // <CardBody>
      <ul className="tables__unity-table__row">
        <li className="tables__unity-table__cell"><p>{post.title}</p></li>
        <li className="tables__unity-table__cell"><p>{post.created_on}</p></li>
        <li className="tables__unity-table__cell"><p>{post.updated_last}</p></li>
        <li className="tables__unity-table__cell">
          <Button label="Read More" onPress={() => (undefined)}/>
        </li>
      </ul>
    // </CardBody>
)

export default SATSupportItem;
