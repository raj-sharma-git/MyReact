import { NODE_TYPE } from "@my-react/react-reconciler";
import { PATCH_TYPE, include, remove } from "@my-react/react-shared";

import { log, type DomElement, type DomNode } from "@my-react-dom-shared";

import type { MyReactFiberNode, MyReactFiberContainer } from "@my-react/react-reconciler";

export const insertBefore = (fiber: MyReactFiberNode, beforeFiberWithDom: MyReactFiberNode, parentFiberWithDom: MyReactFiberNode) => {
  if (!fiber) throw new Error("[@my-react/react-dom] position error, look like a bug for @my-react");

  fiber.patch = remove(fiber.patch, PATCH_TYPE.__append__);

  fiber.patch = remove(fiber.patch, PATCH_TYPE.__position__);

  if (include(fiber.type, NODE_TYPE.__portal__)) return;

  if (include(fiber.type, NODE_TYPE.__plain__ | NODE_TYPE.__text__ | NODE_TYPE.__comment__)) {
    const maybeContainer = parentFiberWithDom as MyReactFiberContainer;

    const parentDOM = (parentFiberWithDom.nativeNode || maybeContainer.containerNode) as DomElement;

    // the before dom will not have containerNode
    const beforeDOM = beforeFiberWithDom.nativeNode as DomNode;

    if (__DEV__ && !beforeDOM) {
      log(fiber, "error", `not have a before dom node, look like a bug for @my-react"`);
    }

    const childDOM = fiber.nativeNode as DomNode;

    try {
      parentDOM.insertBefore(childDOM, beforeDOM);
    } catch (e) {
      if (__DEV__) log(fiber, "error", e);
      parentDOM.append(childDOM);
    }

    return;
  }

  let child = fiber.child;

  while (child) {
    insertBefore(child, beforeFiberWithDom, parentFiberWithDom);

    child = child.sibling;
  }
};
