import React from 'react';

import MaterialIcon from 'material-icons-react';

import {
  Button,
} from 'rv-unity-react';

import cardStyles from 'css/components/card.module.css';
import supportStyles from 'css/pages/support.module.css';

export const SATSupportArticle = ({
  data,
}) => (
  <article className={`${supportStyles.article}`}>
    <header className={`${supportStyles.article__header}`}>
      <h3 className={`${supportStyles.title}`}>{data.title}</h3>
      <p>Last Updated:<time>{data.updated_last}</time></p>
    </header>
    <div className={`${supportStyles.article__body}`}>
      <p>{data.body}</p>
      {data.attachment ? (
        <footer className={`${supportStyles.article__footer}`}>
          <h5 className={`${supportStyles.title}`}>Download Attachment</h5>
          <MaterialIcon icon="cloud_download" color="#0072FF" />
          <a className={`${supportStyles.attachment}`}>Uploaded file: {data.attachment}</a>
        </footer>
      ) : null

      }
    </div>
    <aside className={`${supportStyles.article__aside} ${cardStyles.card} ${cardStyles.md} ${cardStyles.gray}`}>
      <h5 className={`${supportStyles.title}`}>Still have questions?</h5>
      <p className={`${supportStyles.text}`}>Did this post not address all of your questions? Please send us a message with your remaining questions so we can address them.</p>
      <Button
        label="Submit Question"
        onPress={() => undefined}
        size={4}
      />
    </aside>
  </article>
)

export default SATSupportArticle
