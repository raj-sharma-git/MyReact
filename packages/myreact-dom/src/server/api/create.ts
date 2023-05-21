import { isCommentStartElement, NODE_TYPE } from "@my-react/react-reconciler";
import { PATCH_TYPE } from "@my-react/react-shared";

import { getSerializeProps } from "@my-react-dom-server";
import { isSingleTag } from "@my-react-dom-shared";

import { CommentEndElement, CommentStartElement, PlainElement, TextElement } from "./native";

import type { MyReactFiberNode } from "@my-react/react-reconciler";
import type { ServerStreamDispatch } from "@my-react-dom-server";

export const create = (fiber: MyReactFiberNode) => {
  if (fiber.patch & PATCH_TYPE.__create__) {
    if (fiber.type & NODE_TYPE.__text__) {
      fiber.nativeNode = new TextElement(fiber.element as string);
    } else if (fiber.type & NODE_TYPE.__plain__) {
      const typedElementType = fiber.elementType as string;

      fiber.nativeNode = new PlainElement(typedElementType);
    } else if (fiber.type & NODE_TYPE.__comment__) {
      if (isCommentStartElement(fiber)) {
        fiber.nativeNode = new CommentStartElement();
      } else {
        fiber.nativeNode = new CommentEndElement();
      }
    } else {
      throw new Error("createPortal() can not call on the server");
    }

    if (fiber.patch & PATCH_TYPE.__create__) fiber.patch ^= PATCH_TYPE.__create__;
  }
};

export const createStartTagWithStream = (fiber: MyReactFiberNode, renderDispatch: ServerStreamDispatch) => {
  if (fiber.patch & PATCH_TYPE.__create__) {
    const stream = renderDispatch.stream;

    const { isSVG } = renderDispatch.runtimeDom.elementMap.get(fiber) || {};

    if (fiber.type & NODE_TYPE.__text__) {
      if (renderDispatch.lastIsStringNode) {
        stream.push("<!-- -->");
      }

      stream.push(fiber.element as string);

      renderDispatch.lastIsStringNode = true;

      fiber.patch = PATCH_TYPE.__initial__;
    } else if (fiber.type & NODE_TYPE.__plain__) {
      renderDispatch.lastIsStringNode = false;

      if (isSingleTag[fiber.elementType as string]) {
        stream.push(`<${fiber.elementType as string} ${getSerializeProps(fiber, isSVG)}/>`);

        // TODO
        fiber.patch = PATCH_TYPE.__initial__;
      } else {
        stream.push(`<${fiber.elementType as string} ${getSerializeProps(fiber, isSVG)}>`);

        if (fiber.pendingProps["dangerouslySetInnerHTML"]) {
          const typedProps = fiber.pendingProps["dangerouslySetInnerHTML"] as Record<string, unknown>;

          stream.push(typedProps.__html as string);
        }
      }
    } else if (fiber.type & NODE_TYPE.__comment__) {
      renderDispatch.lastIsStringNode = false;

      if (isCommentStartElement(fiber)) {
        stream.push("<!-- [ -->");
      } else {
        stream.push("<!-- ] -->");
      }

      fiber.patch = PATCH_TYPE.__initial__;
    } else {
      throw new Error("createPortal() can not call on the server");
    }
  }
};

export const createCloseTagWithStream = (fiber: MyReactFiberNode, renderDispatch: ServerStreamDispatch) => {
  if (fiber.patch & PATCH_TYPE.__create__) {
    const stream = renderDispatch.stream;
    if (fiber.type & NODE_TYPE.__plain__) {
      renderDispatch.lastIsStringNode = false;

      stream.push(`</${fiber.elementType as string}>`);

      fiber.patch = PATCH_TYPE.__initial__;
    } else {
      throw new Error("unknown close tag for current element");
    }
  }
};
