import React from 'react';

// Unity Styles
import 'rv-unity/src/css/base/variables.css';
import 'rv-unity/src/css/components/tables.css';

export const TableBody = ({
    children
  }) => (
  <tbody className="tbody">
    {children}
  </tbody>
)

export default TableBody;
