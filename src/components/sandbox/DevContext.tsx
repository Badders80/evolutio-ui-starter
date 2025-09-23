'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface DevContextType {
  isDevMode: boolean;
}

const DevContext = createContext<DevContextType>({ isDevMode: false });

interface DevProviderProps {
  children: ReactNode;
}

export function DevProvider({ children }: DevProviderProps) {
  const [isDevMode, setIsDevMode] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsDevMode(params.get('devbar') === '1');
  }, []);

  return <DevContext.Provider value={{ isDevMode }}>{children}</DevContext.Provider>;
}

export const useDev = () => useContext(DevContext);