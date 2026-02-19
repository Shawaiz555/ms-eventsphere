"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

// Create context for global loading state
const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
  startLoading: () => {},
  stopLoading: () => {},
});

/**
 * Custom hook to access loading state
 * Usage: const { isLoading, startLoading, stopLoading } = useLoading();
 */
export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
}

/**
 * Global loading provider with route transition detection
 * Wrap your app with this provider to enable:
 * - Automatic loading on route changes
 * - Manual loading control via useLoading hook
 */
export default function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  // Auto-detect route changes and show loader
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500); // Minimum show time
    return () => clearTimeout(timer);
  }, [pathname]);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, startLoading, stopLoading }}>
      {isLoading && <Loader variant="page" message="Loading..." />}
      {children}
    </LoadingContext.Provider>
  );
}
