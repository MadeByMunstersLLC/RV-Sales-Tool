import React from 'react';

// Unity Styles
import 'rv-unity/src/css/base/variables.css';
import 'rv-unity/src/css/components/tables.css';

export const TableHeader = ({
    children
  }) => (
  <th className="tables__unity-table__header">
    {children}
  </th>
)

export default TableHeader;
