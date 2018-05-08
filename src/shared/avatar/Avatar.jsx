import * as React from 'react';
import * as classNames from 'classnames';

import styles from '../../css/components/avatar.module.css';

function abbreviateText(name) {
  let result = '??';

  if (name == null) { name = '??' }

  const nameSections = name.trim().split(' ');

  if (nameSections.length > 1) {
    result = nameSections[0].charAt(0) + nameSections[1].charAt(0);
  } else {
    result = name.substring(0, 2);
  }

  result = result.toUpperCase();

  return result;
}

export const Avatar = ({
  avatarImage,
  avatarText,
  size = 'md',
  children
}: AvatarProps) => {
  const avatarClasses: string = classNames({
    [`${styles.avatar}`]: true,
    [`${styles.avatar}-${size}`]: true,
  });

  const textClasses = classNames({
    [`${styles.text}`]: true,
  });
  const abbreviatedText = abbreviateText(avatarText);

  return (
    <div className={avatarClasses}>
      {avatarImage ? (
        <img
          src={avatarImage}
          className="img"
          alt={avatarText}
        />
      ) : (
        <p className={textClasses}>{abbreviatedText}</p>
      )}
    </div>
  );
};

export default Avatar;
