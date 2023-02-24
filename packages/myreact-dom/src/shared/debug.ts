import { __my_react_internal__, __my_react_shared__ } from "@my-react/react";

import type { DomElement, DomNode } from "./dom";
import type { MyReactFiberNode } from "@my-react/react";

const { currentRunningFiber } = __my_react_internal__;
const { getFiberTree } = __my_react_shared__;

export const debugWithDOM = (fiber: MyReactFiberNode) => {
  if (fiber.node) {
    const debugDOM = fiber.node as DomElement | DomNode;
    debugDOM["__fiber__"] = fiber;
    debugDOM["__element__"] = fiber.element;
    debugDOM["__children__"] = fiber.children;
  }
};

const originalConsoleWarn = console.warn;

const originalConsoleError = console.error;

export const setScopeLog = () => {
  console.warn = (...args: any) => {
    const fiberTree = getFiberTree(currentRunningFiber.current);
    originalConsoleWarn(...args, fiberTree);
  };
  console.error = (...args: any) => {
    const fiberTree = getFiberTree(currentRunningFiber.current);
    originalConsoleError(...args, fiberTree);
  };
};

export const resetScopeLog = () => {
  console.warn = originalConsoleWarn;
  console.error = originalConsoleError;
};

const cache: Record<string, Record<string, boolean>> = {};

type LogProps = {
  message: string | Error;
  fiber?: MyReactFiberNode;
  triggerOnce?: boolean;
  level?: "warn" | "error";
};

export const log = ({ fiber, message, level = "warn", triggerOnce = false }: LogProps) => {
  if (__DEV__) {
    const tree = getFiberTree(fiber || currentRunningFiber.current);
    if (triggerOnce) {
      const messageKey = message.toString();
      cache[messageKey] = cache[messageKey] || {};
      if (cache[messageKey][tree]) return;
      cache[messageKey][tree] = true;
    }
    if (level === "warn") {
      originalConsoleWarn(
        `[${level}]:`,
        "\n-----------------------------------------\n",
        `${typeof message === "string" ? message : (message as Error).stack || (message as Error).message}`,
        "\n-----------------------------------------\n",
        "Render Tree:",
        tree
      );
      return;
    }
    if (level === "error") {
      originalConsoleError(
        `[${level}]:`,
        "\n-----------------------------------------\n",
        `${typeof message === "string" ? message : (message as Error).stack || (message as Error).message}`,
        "\n-----------------------------------------\n",
        "Render Tree:",
        tree
      );
    }
    return;
  }
  const currentFiber = fiber || currentRunningFiber.current;
  const tree = getFiberTree(currentFiber);
  if (triggerOnce) {
    const messageKey = message.toString();
    cache[messageKey] = cache[messageKey] || {};
    if (cache[messageKey][currentFiber.uid || "max"]) return;
    cache[messageKey][currentFiber.uid || "max"] = true;
  }
  // look like a ts bug
  if (level === "warn") {
    originalConsoleWarn(
      `[${level}]:`,
      "\n-----------------------------------------\n",
      `${typeof message === "string" ? message : (message as Error).stack || (message as Error).message}`,
      "\n-----------------------------------------\n",
      "cause by:",
      tree
    );
    return;
  }
  if (level === "error") {
    originalConsoleError(
      `[${level}]:`,
      "\n-----------------------------------------\n",
      `${typeof message === "string" ? message : (message as Error).stack || (message as Error).message}`,
      "\n-----------------------------------------\n",
      "cause by:",
      tree
    );
  }
};

export const safeCall = <T extends any[] = any[], K = any>(action: (...args: T) => K, ...args: T) => {
  try {
    return action.call(null, ...args);
  } catch (e) {
    const fiber = currentRunningFiber.current;

    log({ message: e as Error, level: "error", fiber });

    if (fiber) fiber.error(e);

    // if (fiber && fiber.root.globalScope.isAppCrash) return;

    // if (fiber) fiber.root.globalScope.isAppCrash = true;

    // throw new Error((e as Error).message);
  }
};

export const safeCallAsync = async <T extends any[] = any[], K = any>(action: (...args: T) => K, ...args: T) => {
  try {
    return await action.call(null, ...args);
  } catch (e) {
    const fiber = currentRunningFiber.current;

    log({ message: e as Error, level: "error", fiber });

    if (fiber) fiber.error(e);

    // if (fiber && fiber.root.globalScope.isAppCrash) return;

    // if (fiber) fiber.root.globalScope.isAppCrash = true;

    // throw new Error((e as Error).message);
  }
};

export const safeCallWithFiber = <T extends any[] = any[], K = any>({ action, fiber }: { action: (...args: T) => K; fiber: MyReactFiberNode }, ...args: T) => {
  try {
    return action.call(null, ...args);
  } catch (e) {
    if (fiber.root.globalScope.isAppCrash) return;

    log({ message: e as Error, level: "error", fiber });

    fiber.root.globalScope.isAppCrash = true;

    throw new Error((e as Error).message);
  }
};
