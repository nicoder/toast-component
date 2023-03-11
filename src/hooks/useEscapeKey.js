import React from 'react';

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleKeydown(event) {
      if (event.code === 'Escape') callback();
    }

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);
}

export default useEscapeKey;
