import { __my_react_shared__, __my_react_internal__ } from "@my-react/react";
import { generateContextMap, getContextMapFromMap } from "@my-react/react-reconciler";

import { append, create, update } from "./dom";

import type { FiberDispatch, MyReactFiberNode, MyReactElementNode, createContext } from "@my-react/react";
import type { LinkTreeList } from "@ReactDOM_shared";

const { safeCallWithFiber } = __my_react_shared__;

const { NODE_TYPE, PATCH_TYPE } = __my_react_internal__;

export class ServerDispatch implements FiberDispatch {
  rootFiber: MyReactFiberNode | null = null;

  rootContainer: { [p: string]: any } = {};

  isAppMounted = false;

  isAppCrash = false;

  effectMap: Record<string, (() => void)[]> = {};

  layoutEffectMap: Record<string, (() => void)[]> = {};

  suspenseMap: Record<string, MyReactElementNode> = {};

  elementTypeMap: Record<string, boolean> = {};

  contextMap: Record<string, Record<string, MyReactFiberNode>> = {};

  unmountMap: Record<string, (MyReactFiberNode | MyReactFiberNode[])[]> = {};

  eventMap: Record<string, Record<string, ((...args: any[]) => void) & { cb?: any[] | undefined }>> = {};

  trigger(_fiber: MyReactFiberNode): void {
    void 0;
  }
  resolveLazy(): boolean {
    return false;
  }
  resolveSuspenseMap(_fiber: MyReactFiberNode): void {
    // throw new Error("Method not implemented.");
    void 0;
  }
  resolveSuspenseElement(_fiber: MyReactFiberNode): MyReactElementNode {
    // throw new Error("Method not implemented.");
    if (__DEV__) {
      console.warn("not support suspense on the server side");
    }
    return null;
  }
  resolveContextMap(_fiber: MyReactFiberNode): void {
    // throw new Error("Method not implemented.");
    generateContextMap(_fiber, this.contextMap);
  }
  resolveContextFiber(
    _fiber: MyReactFiberNode,
    _contextObject: ReturnType<typeof createContext> | null
  ): MyReactFiberNode | null {
    if (_contextObject) {
      const contextMap = getContextMapFromMap(_fiber.parent, this.contextMap);
      return contextMap[_contextObject.id] || null;
    } else {
      return null;
    }
  }
  resolveComponentQueue(_fiber: MyReactFiberNode): void {
    void 0;
  }
  resolveHookQueue(_fiber: MyReactFiberNode): void {
    void 0;
  }
  reconcileCommit(_fiber: MyReactFiberNode, _hydrate: boolean, _parentFiberWithDom: MyReactFiberNode): boolean {
    safeCallWithFiber({ fiber: _fiber, action: () => create(_fiber) });
    safeCallWithFiber({ fiber: _fiber, action: () => update(_fiber) });
    safeCallWithFiber({
      fiber: _fiber,
      action: () => append(_fiber, _parentFiberWithDom),
    });
    if (_fiber.child) {
      this.reconcileCommit(_fiber.child, _hydrate, _fiber.node ? _fiber : _parentFiberWithDom);
    }
    if (_fiber.sibling) {
      this.reconcileCommit(_fiber.sibling, _hydrate, _parentFiberWithDom);
    }
    return true;
  }
  reconcileCreate(_list: LinkTreeList<MyReactFiberNode>): void {
    void 0;
  }
  reconcileUpdate(_list: LinkTreeList<MyReactFiberNode>): void {
    void 0;
  }
  beginProgressList(): void {
    void 0;
  }
  endProgressList(): void {
    void 0;
  }
  generateUpdateList(_fiber: MyReactFiberNode | MyReactFiberNode[] | null): void {
    void 0;
  }
  pendingCreate(_fiber: MyReactFiberNode): void {
    if (_fiber.type & NODE_TYPE.__isPortal__) {
      throw new Error("should not use portal element on the server");
    }
    if (_fiber.type & (NODE_TYPE.__isTextNode__ | NODE_TYPE.__isPlainNode__)) {
      _fiber.patch |= PATCH_TYPE.__pendingCreate__;
    }
  }
  pendingUpdate(_fiber: MyReactFiberNode): void {
    if (_fiber.type & (NODE_TYPE.__isTextNode__ | NODE_TYPE.__isPlainNode__)) {
      _fiber.patch |= PATCH_TYPE.__pendingUpdate__;
    }
  }
  pendingAppend(_fiber: MyReactFiberNode): void {
    if (_fiber.type & (NODE_TYPE.__isTextNode__ | NODE_TYPE.__isPlainNode__)) {
      _fiber.patch |= PATCH_TYPE.__pendingAppend__;
    }
  }
  pendingContext(_fiber: MyReactFiberNode): void {
    void 0;
  }
  pendingPosition(_fiber: MyReactFiberNode): void {
    void 0;
  }
  pendingUnmount(_fiber: MyReactFiberNode, _pendingUnmount: MyReactFiberNode | MyReactFiberNode[]): void {
    void 0;
  }
  pendingLayoutEffect(_fiber: MyReactFiberNode, _layoutEffect: () => void): void {
    void 0;
  }
  pendingEffect(_fiber: MyReactFiberNode, _effect: () => void): void {
    void 0;
  }
  removeFiber(_fiber: MyReactFiberNode): void {
    void 0;
  }
  updateAllSync(): void {
    void 0;
  }
  updateAllAsync(): void {
    void 0;
  }
}
