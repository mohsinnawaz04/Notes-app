import { LayoutContext } from "@/lib/contexts/LayoutContext";
import { useContext } from "react";

export function useLayout() {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error("useLayout must be used within LayoutProvider");
  }

  return context;
}
