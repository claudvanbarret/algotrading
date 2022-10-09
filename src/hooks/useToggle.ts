import { useCallback, useState } from 'react';

export const useToggle = (initialState = false) => {
  const [state, setState] = useState<boolean>(initialState);

  const setTrue = useCallback(() => setState(true), []);

  const setFalse = useCallback(() => setState(false), []);

  const setToggle = useCallback(() => setState((s) => !s), []);

  return [state, setTrue, setFalse, setToggle] as const;
};
