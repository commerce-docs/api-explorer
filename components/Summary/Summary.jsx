/* Copyright 2023 Adobe. All Rights Reserved.
NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying it. */

import * as styles from './Summary.module.css';

export function Summary({ children }) {
  return (
    <div className={`${styles.summary}`}>{children}</div>
  );
}
