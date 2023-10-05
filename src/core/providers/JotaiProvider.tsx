"use client";
import { Provider } from "jotai";

const JotaiProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <Provider>{children}</Provider>;
};
export default JotaiProvider;
