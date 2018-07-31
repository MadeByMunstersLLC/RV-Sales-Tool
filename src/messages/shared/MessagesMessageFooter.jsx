import React from 'react';

import { Button } from 'rv-unity-react';

import messageStyles from '../../css/pages/messages.module.css';

export const MessagesMessageFooter = () => (
  <footer className={`${messageStyles.content__footer}`}>
    {/* TODO: Form Needs wiring up */}
    <form className={`${messageStyles.form}`}>
      <textarea placeholder="Enter message" />
      <div className={`${messageStyles.actions}`}>
        <Button
          label="Send Message"
          size={0}
          onPress={() => undefined}
        />
      </div>
    </form>
  </footer>
)

export default MessagesMessageFooter;
