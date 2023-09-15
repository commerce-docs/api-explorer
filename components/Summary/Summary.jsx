import * as styles from './Summary.module.css';

export function Summary({ children }) {
  return (

    <div className={`${styles.summary}`}>{children}</div>

  );
}
