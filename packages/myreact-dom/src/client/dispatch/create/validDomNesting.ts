// for invalid dom structure
import { __my_react_shared__ } from "@my-react/react";
import { NODE_TYPE } from "@my-react/react-shared";

import { enableAllCheck } from "@my-react-dom-shared";

import type { MyReactElement, MyReactFiberNode } from "@my-react/react";

const { log } = __my_react_shared__;

// TODO
export const validDomNesting = (fiber: MyReactFiberNode) => {
  if (!enableAllCheck.current) return;

  if (fiber.type & NODE_TYPE.__isPlainNode__) {
    const typedElement = fiber.element as MyReactElement;

    if (typedElement.type === "p") {
      let parent = fiber.parent;

      while (parent && parent.type & NODE_TYPE.__isPlainNode__) {
        const typedParentElement = parent.element as MyReactElement;

        if (typedParentElement.type === "p") {
          log({
            fiber,
            level: "warn",
            triggerOnce: true,
            message: `invalid dom nesting: <p> cannot appear as a child of <p>`,
          });
        }
        parent = parent.parent;
      }
    }
  }
};
