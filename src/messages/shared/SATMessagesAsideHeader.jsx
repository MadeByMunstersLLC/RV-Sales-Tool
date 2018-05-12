import React from 'react';

import messageStyles from '../../css/pages/messages.module.css';

export const SATMessagesAsideHeader = () => (
  <header className={`${messageStyles.aside__header}`}>
    <button>New Message</button>
  </header>
)

export default SATMessagesAsideHeader
