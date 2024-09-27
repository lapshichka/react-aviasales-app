import React from 'react';
import styles from './InfoLink.module.scss';

interface InfoLinkProps {
  text?: string,
  href: string,
  children?: JSX.Element,
}

const InfoLink: React.FC<InfoLinkProps> = ({
  text = '', href = '', children,
}) => (
  <div className={styles.content}>
    <a href={href}>{children}</a>
    <a href={href}>{text}</a>
  </div>
);
export default InfoLink;
