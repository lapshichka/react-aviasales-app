import React from 'react';
import { styles } from 'widgets/Footer/index';

interface InfoLinkProps {
  text?: string,
  href: string,
  children?: JSX.Element,
}

const InfoLink: React.FC<InfoLinkProps> = ({
  text = '', href = '', children,
}) => (
  <div className={styles.footer__content}>
    <a href={href} className={styles.footer__content_icon}>{children}</a>
    <a href={href}>{text}</a>
  </div>
);
export default InfoLink;
