"use client";

import React, { createContext, useState, ReactNode } from "react";

type LayoutContextType = {
  isHeaderExpanded: boolean;
  setIsHeaderExpanded: (expanded: boolean) => void;
};

type LayoutProviderProps = {
  children: ReactNode;
};

export const LayoutContext = createContext<LayoutContextType | undefined>(
  undefined,
);

export function LayoutProvider({ children }: LayoutProviderProps) {
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);

  return (
    <LayoutContext.Provider value={{ isHeaderExpanded, setIsHeaderExpanded }}>
      {children}
    </LayoutContext.Provider>
  );
}
