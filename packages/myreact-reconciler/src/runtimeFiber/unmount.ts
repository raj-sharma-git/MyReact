import { STATE_TYPE } from "@my-react/react-shared";

import { fiberToDispatchMap } from "../share";

import type { MyReactFiberNode } from "./instance";
import type { MyReactFiberNodeDev } from "./interface";
import type { CustomRenderDispatch } from "../renderDispatch";

export const unmountFiberNode = (fiber: MyReactFiberNode, renderDispatch: CustomRenderDispatch) => {
  if (fiber.state & STATE_TYPE.__unmount__) return;

  renderDispatch.commitUnsetRef(fiber);

  renderDispatch.patchToFiberUnmount?.(fiber);

  __DEV__ ? "" : fiberToDispatchMap.delete(fiber);

  renderDispatch.runtimeMap.suspenseMap.delete(fiber);

  renderDispatch.runtimeMap.strictMap.delete(fiber);

  renderDispatch.runtimeMap.errorBoundariesMap.delete(fiber);

  renderDispatch.runtimeMap.effectMap.delete(fiber);

  renderDispatch.runtimeMap.layoutEffectMap.delete(fiber);

  renderDispatch.runtimeMap.contextMap.delete(fiber);

  renderDispatch.runtimeMap.unmountMap.delete(fiber);

  renderDispatch.runtimeMap.eventMap.delete(fiber);

  renderDispatch.runtimeMap.useIdMap.delete(fiber);

  fiber.child = null;

  fiber.parent = null;

  fiber.sibling = null;

  fiber.instance = null;

  fiber.hookList = null;

  fiber.dependence = null;

  fiber.nativeNode = null;

  fiber.updateQueue = null;

  fiber.state = STATE_TYPE.__unmount__;

  if (__DEV__) {
    const typedFiber = fiber as MyReactFiberNodeDev;

    typedFiber._debugIsMount = false;

    delete typedFiber._debugHookNodes;

    delete typedFiber._debugContextMap;

    delete typedFiber._debugChildren;

    delete typedFiber._debugSuspense;

    delete typedFiber._debugStrict;

    delete typedFiber._debugScope;

    delete typedFiber._debugEventMap;

    delete typedFiber._debugUpdateQueue;
  }
};
