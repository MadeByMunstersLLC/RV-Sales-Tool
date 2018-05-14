import React from 'react';

import messageStyles from '../../css/pages/messages.module.css';

export const SATMessagesMessageFooter = () => (
  <footer className={`${messageStyles.content__footer}`}>
    <form className={`${messageStyles.form}`}>
      <textarea placeholder="Enter message" />
      <div className={`${messageStyles.actions}`}>
        <input type="submit" value="SEND" />
      </div>
    </form>
  </footer>
)

export default SATMessagesMessageFooter;
