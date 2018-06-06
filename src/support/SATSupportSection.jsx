import React from 'react';
import { NavLink } from "react-router-dom";

import SATSupportItem from './SATSupportItem';

// Unity Components
import { CardHeader } from 'rv-unity-react';

// Unity Styles
import 'rv-unity/src/css/base/variables.css';
import 'rv-unity/src/css/components/cards.css';

export const SATSupportSection = ({
    categories,
    posts
  }) => (
  <div>
    {categories.map((category, index) =>
      <div key={index}>
        <CardHeader>
          {category.title}
        </CardHeader>
        <ul>
          {posts.map((post, index) =>
            // TODO: Refactor with filter once data model is created
            (post.category === category.title ?
              <li key={index}>
                <NavLink
                  to={`/support/${post.id}`}
                >
                  <SATSupportItem post={post} />
                </NavLink>
              </li>
            : ''
            )
          )}
        </ul>
      </div>
    )}
  </div>
)

export default SATSupportSection;
