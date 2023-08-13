import { mountControlInputElement, prepareControlInputProp, updateControlInputElement } from "../helper";

import type { MyReactFiberNode } from "@my-react/react-reconciler";

/**
 * @internal
 */
export const controlElementTag: Record<string, boolean> = {
  input: true,
};

/**
 * @internal
 */
export const mountControlElement = (fiber: MyReactFiberNode) => {
  const elementType = fiber.elementType;

  switch (elementType) {
    case "input":
      mountControlInputElement(fiber);
  }
};

/**
 * @internal
 */
export const updateControlElement = (fiber: MyReactFiberNode) => {
  const elementType = fiber.elementType;

  switch (elementType) {
    case "input":
      updateControlInputElement(fiber);
  }
};

/**
 * @internal
 */
export const prepareControlProp = (fiber: MyReactFiberNode) => {
  const elementType = fiber.elementType;

  switch (elementType) {
    case "input":
      prepareControlInputProp(fiber);
  }
};
