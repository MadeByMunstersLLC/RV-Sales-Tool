import React from 'react';

import tableStyles from 'css/components/table.module.css';

// Unity Styles
import 'rv-unity/src/css/base/variables.css';
import 'rv-unity/src/css/components/tables.css';

export const Table = ({
    children
  }) => (
  <table className={`${tableStyles.table}`}>
    {children}
  </table>
)

export default Table;
