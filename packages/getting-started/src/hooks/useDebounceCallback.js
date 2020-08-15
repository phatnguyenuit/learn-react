import { useRef, useCallback, useEffect } from 'react';

/**
 * Use debounce callback
 * @param {Function} callback Callback
 * @param {number} delay delay time to execute callback
 * @param {boolean} immediate Run callback immediate on the first time
 */
export default function useDebounceCallback(
  callback,
  delay,
  immediate = false,
) {
  const timer = useRef(null);
  const debouncedCallback = useRef();

  const enhancedCallback = useCallback(
    (...args) => {
      const later = () => {
        timer.current = null;
        if (!immediate) {
          debouncedCallback.current.apply(null, args);
        }
      };

      const callNow = !timer.current && immediate;
      clearTimeout(timer.current);

      timer.current = setTimeout(later, delay);

      if (callNow) {
        debouncedCallback.current.apply(null, args);
      }
    },
    [delay, immediate],
  );

  useEffect(() => {
    debouncedCallback.current = callback;
  }, [callback]);

  return enhancedCallback;
}
