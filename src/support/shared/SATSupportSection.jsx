import React from 'react';
import { NavLink } from "react-router-dom";

import {
  Button,
  Card,
  CardHeader,
  CardBody, } from 'rv-unity-react';

// TODO:
  //• Refactor how we filter lists by category once data model created

export const SATSupportSection = ({
    categories,
    posts
  }) => (
    <Card>
      <CardHeader>
        Support Topics
      </CardHeader>
      {categories.map((category, index) =>
        <div key={index}>
          <CardHeader>
            {category.title}
          </CardHeader>
          <CardBody>
            <div className="tables__unity-table">
              <ul className="tables__unity-table__header">
                <li>Title</li>
                <li>Created On</li>
                <li>Updated On</li>
                <li></li>
              </ul>
              <div className="tables__unity-table__body">
                {posts.map((post, index) =>
                  (post.category === category.title ?
                    <ul className="tables__unity-table__row" key={index}>
                      <li className="tables__unity-table__cell">{post.title}</li>
                      <li className="tables__unity-table__cell">{post.created_on}</li>
                      <li className="tables__unity-table__cell">{post.updated_on}</li>
                      <li className="tables__unity-table__cell">
                        <NavLink
                          className="helpers__unity-h--float-right"
                          to={`/support/${post.id}`}
                          >
                            <Button
                              label="View"
                              size={2}
                              ghost
                              onPress={() => undefined}
                            />
                          </NavLink>
                        </li>
                      </ul>
                      : ''
                    )
                  )}
              </div>
            </div>
          </CardBody>
        </div>
      )}
    </Card>
)

export default SATSupportSection;
