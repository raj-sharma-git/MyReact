import { createContext } from "@my-react/react";
import process from "node:process";

export type Props = {
  /**
   * Stderr stream passed to `render()` in `options.stderr` or `process.stderr` by default.
   */
  readonly stderr: NodeJS.WriteStream;

  /**
   * Write any string to stderr, while preserving Ink's output.
   * It's useful when you want to display some external information outside of Ink's rendering and ensure there's no conflict between the two.
   * It's similar to `<Static>`, except it can't accept components, it only works with strings.
   */
  readonly write: (data: string) => void;
};

/**
 * `StderrContext` is a React context, which exposes stderr stream.
 */
export const StderrContext = createContext<Props>({
  stderr: process.stderr,
  write: () => void 0,
});

StderrContext.displayName = "InternalStderrContext";
