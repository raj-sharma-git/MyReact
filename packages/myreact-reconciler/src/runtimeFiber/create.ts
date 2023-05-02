import { PATCH_TYPE } from "@my-react/react-shared";

import { debugWithNode } from "../share";

import { MyReactFiberNode } from "./instance";

import type { MyReactFiberNodeDev } from "./interface";
import type { MyReactElementNode } from "@my-react/react";

export const createFiberNode = (
  {
    parent,
    type = "append",
  }: {
    parent: MyReactFiberNode | null;
    type?: "append" | "position";
  },
  element: MyReactElementNode
) => {
  const newFiberNode = new MyReactFiberNode(element);

  newFiberNode.parent = parent;

  newFiberNode.renderContainer = parent.renderContainer;

  parent.child = parent.child || newFiberNode;

  const renderContainer = parent.renderContainer;

  const renderDispatch = renderContainer.renderDispatch;

  renderDispatch.pendingCreate(newFiberNode);

  renderDispatch.pendingUpdate(newFiberNode);

  if (type === "position") {
    renderDispatch.pendingPosition(newFiberNode);
  } else {
    renderDispatch.pendingAppend(newFiberNode);
  }

  renderDispatch.pendingRef(newFiberNode);

  renderDispatch.resolveUseIdMap(newFiberNode);

  renderDispatch.resolveScopeMap(newFiberNode);

  renderDispatch.resolveStrictMap(newFiberNode);

  renderDispatch.resolveContextMap(newFiberNode);

  renderDispatch.resolveSuspenseMap(newFiberNode);

  renderDispatch.resolveErrorBoundariesMap(newFiberNode);

  renderDispatch.patchToFiberInitial?.(newFiberNode);

  if (!(newFiberNode.patch & PATCH_TYPE.__update__)) {
    newFiberNode.memoizedProps = newFiberNode.pendingProps;
  }

  if (__DEV__) {
    const typedFiber = newFiberNode as MyReactFiberNodeDev;

    const timeNow = Date.now();

    typedFiber._debugRenderState = {
      renderCount: 1,
      mountTime: timeNow,
      prevUpdateTime: 0,
      currentUpdateTime: timeNow,
    };

    if (typedFiber.type & renderDispatch.typeForHasNode) {
      renderDispatch.pendingLayoutEffect(typedFiber, () => debugWithNode(typedFiber));
    }
  }

  return newFiberNode;
};
