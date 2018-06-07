import React from 'react';
import { NavLink } from "react-router-dom";

import SATSupportItem from './SATSupportItem';
import { Table, TableHeader, TableBody, TableRow } from 'shared/table';

// Unity Components
import { Button, Card, CardHeader, CardBody } from 'rv-unity-react';

// Unity Styles
import 'rv-unity/src/css/base/variables.css';
import 'rv-unity/src/css/components/cards.css';
import 'rv-unity/src/css/components/tables.css';

export const SATSupportSection = ({
    categories,
    posts
  }) => (
  <div>
    <CardHeader>
      Support Topics
    </CardHeader>
    {categories.map((category, index) =>
      <div key={index}>
        <CardHeader>
          {category.title}
        </CardHeader>
        <CardBody>
          <Table>
            <TableHeader>
                <th>Title</th>
                <th>Created On</th>
                <th colSpan="2">Updated On</th>
            </TableHeader>
            <TableBody>
              {posts.map((post, index) =>
                // TODO: Refactor with filter once data model is created
                (post.category === category.title ?
                  <TableRow key={index}>
                    {/* <SATSupportItem post={post} /> */}
                    <td width="40%"><p>{post.title}</p></td>
                    <td width="20%"><p>{post.created_on}</p></td>
                    <td width="20%"><p>{post.updated_last}</p></td>
                    <td width="20%">
                      <Button label="Read More" onPress={() => (undefined)}/>
                    </td>
                  </TableRow>
                : ''
                )
              )}
            </TableBody>
          </Table>
            <ul className="tables__unity-table__header">
              <li>Title</li>
              <li>Created On</li>
              <li>Updated On</li>
            </ul>
          {/* <Card> */}
            <ul className="cards__unity-card">
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
          {/* </Card> */}
        </CardBody>
      </div>
    )}
  </div>
)

export default SATSupportSection;
