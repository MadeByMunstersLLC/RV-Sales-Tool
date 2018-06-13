import React from 'react';

// Unity Styles
import 'rv-unity/src/css/base/variables.css';
import 'rv-unity/src/css/components/tables.css';

export const TableHeader = ({
    children
  }) => (
  <tr className="tables__unity-table__header">
    {children}
  </tr>
)

export default TableHeader;
