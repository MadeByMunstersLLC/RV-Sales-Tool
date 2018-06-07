import React from 'react';

import tableStyles from 'css/components/table.module.css';

// Unity Styles
import 'rv-unity/src/css/base/variables.css';
import 'rv-unity/src/css/components/tables.css';

export const TableBody = ({
    children
  }) => (
  <tbody className={`${tableStyles.table__body}`}>
    {children}
  </tbody>
)

export default TableBody;
