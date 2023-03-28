import { createElement } from "@my-react/react";
import { WrapperByScope } from "@my-react/react-reconciler";

import type { lazy } from "@my-react/react";
import type { MyReactFiberNode } from "@my-react/react-reconciler";

export const resolveLazyElement = (_fiber: MyReactFiberNode) => {
  const renderDispatch = _fiber.container.renderDispatch;

  const typedElementType = _fiber.elementType as ReturnType<typeof lazy>;
  if (typedElementType._loaded === true) {
    const render = typedElementType.render as ReturnType<typeof lazy>["render"];

    return WrapperByScope(createElement(render, _fiber.pendingProps));
  } else if (typedElementType._loading === false) {
    typedElementType._loading = true;

    Promise.resolve()
      .then(() => typedElementType.loader())
      .then((re) => {
        const render = typeof re === "object" && typeof re?.default === "function" ? re.default : re;

        typedElementType._loaded = true;

        typedElementType._loading = false;

        typedElementType.render = render as ReturnType<typeof lazy>["render"];

        _fiber._update();
      });
  }

  return WrapperByScope(renderDispatch.resolveSuspense(_fiber));
};

export const resolveLazyElementAsync = async (_fiber: MyReactFiberNode) => {
  const typedElementType = _fiber.elementType as ReturnType<typeof lazy>;

  if (typedElementType._loaded) return WrapperByScope(createElement(typedElementType.render, _fiber.pendingProps));

  return typedElementType.loader().then((loaded) => {
    const render = typeof loaded === "object" && typeof loaded?.default === "function" ? loaded.default : loaded;

    typedElementType.render = render as ReturnType<typeof lazy>["render"];

    typedElementType._loaded = true;

    return WrapperByScope(createElement(typedElementType.render, _fiber.pendingProps));
  });
};
