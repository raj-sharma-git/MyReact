import { isValidElement } from "../element";

import { checkFiberElement } from "./check";

import type { MyReactElementNode } from "../element";
import type { MyReactFiberNode } from "./instance";

export const updateFiberNode = (
  {
    fiber,
    parent,
    prevFiber,
  }: {
    fiber: MyReactFiberNode;
    parent: MyReactFiberNode;
    prevFiber: MyReactFiberNode;
  },
  nextElement: MyReactElementNode
) => {
  const prevElement = fiber.element;

  // make sure invoke `installParent` after `installElement`
  fiber.installElement(nextElement);

  fiber.installParent(parent);

  const globalDispatch = fiber.root.globalDispatch;

  if (__DEV__) checkFiberElement(fiber);

  globalDispatch.resolveFiberUpdate;

  if (prevElement !== nextElement || !fiber.isActivated) {
    globalDispatch.resolveFiberUpdate(fiber);
    globalDispatch.resolveMemorizedProps(fiber);
  }

  if (isValidElement(prevElement) && isValidElement(nextElement) && prevElement.ref !== nextElement.ref) {
    globalDispatch.pendingRef(fiber);
  }

  if (fiber !== prevFiber) {
    globalDispatch.pendingPosition(fiber);
  }

  return fiber;
};
