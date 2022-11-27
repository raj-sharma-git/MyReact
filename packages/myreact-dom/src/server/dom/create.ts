import { NODE_TYPE, PATCH_TYPE } from "@my-react/react-shared";

import { CommentElement, PlainElement, TextElement } from "./native";

import type { MyReactElement, MyReactFiberNode } from "@my-react/react";

export const create = (fiber: MyReactFiberNode) => {
  if (fiber.patch & PATCH_TYPE.__pendingCreate__) {
    if (fiber.type & NODE_TYPE.__isTextNode__) {
      fiber.node = new TextElement(fiber.element as string);
    } else if (fiber.type & NODE_TYPE.__isPlainNode__) {
      const typedElement = fiber.element as MyReactElement;
      fiber.node = new PlainElement(typedElement.type as string);
    } else if (fiber.type & NODE_TYPE.__isScopeNode__) {
      fiber.node = new CommentElement("");
    } else {
      throw new Error("createPortal() can not call on the server");
    }

    if (fiber.patch & PATCH_TYPE.__pendingCreate__) fiber.patch ^= PATCH_TYPE.__pendingCreate__;
  }
};
