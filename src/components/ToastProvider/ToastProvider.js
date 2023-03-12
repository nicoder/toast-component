import React from 'react';

import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => setToasts([]));

  function addToast(variant, message) {
    setToasts([
      ...toasts,
      {
        id: Math.random(),
        variant,
        message,
      },
    ]);
  }

  function discardToast(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  return (
    <ToastContext.Provider value={{toasts, addToast, discardToast}}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
