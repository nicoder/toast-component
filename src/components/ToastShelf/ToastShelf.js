import React from 'react';

import Toast from '../Toast';
import ToastProvider from '../ToastProvider';

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const {toasts, discardToast} = React.useContext(ToastProvider);
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({id, variant, message}) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} onClose={() => discardToast(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
