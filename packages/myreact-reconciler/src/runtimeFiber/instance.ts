import { __my_react_internal__, __my_react_shared__ } from "@my-react/react";
import { PATCH_TYPE, STATE_TYPE } from "@my-react/react-shared";

import { processClassComponentUpdateQueue, processFunctionComponentUpdateQueue } from "../dispatchQueue";
import { triggerError, triggerUpdate } from "../renderUpdate";
import { getTypeFromElementNode, NODE_TYPE } from "../share";

import type {
  MyReactElement,
  MyReactElementNode,
  MyReactElementType,
  MyReactInternalInstance,
  RenderFiber,
  RenderHook,
  UpdateQueue,
  MyReactComponent,
} from "@my-react/react";
import type { ListTree } from "@my-react/react-shared";

type NativeNode = Record<string, any>;

const { enableSyncFlush } = __my_react_shared__;

const { currentRenderPlatform } = __my_react_internal__;

export const emptyProps = {};

export type PendingStateType = {
  isForce: boolean;
  callback: Array<() => void>;
  pendingState: Record<string, unknown>;
};

export type MemoizedStateType = Record<string, unknown>;

export type ErrorType = {
  stack: string;
  error: Error;
  // used for revert from error for hmr
  revertState: Record<string, unknown>;
};

export class MyReactFiberNode implements RenderFiber {
  ref: MyReactElement["ref"];

  key: MyReactElement["key"];

  state: STATE_TYPE = STATE_TYPE.__initial__;

  patch: PATCH_TYPE = PATCH_TYPE.__initial__;

  type: NODE_TYPE = NODE_TYPE.__initial__;

  nativeNode: Record<string, any>;

  element: MyReactElementNode;

  elementType: MyReactElementType | null;

  hookList: ListTree<RenderHook> | null = null;

  dependence: Set<MyReactInternalInstance> | null = null;

  instance: MyReactInternalInstance | null = null;

  child: MyReactFiberNode | null = null;

  parent: MyReactFiberNode | null = null;

  sibling: MyReactFiberNode | null = null;

  updateQueue: ListTree<UpdateQueue> | null = null;

  pendingProps: MyReactElement["props"] = emptyProps;

  memoizedProps: MyReactElement["props"] = emptyProps;

  pendingState: { state?: PendingStateType; error?: ErrorType };

  memoizedState: { stableState?: MemoizedStateType; revertState?: MemoizedStateType };

  constructor(element: MyReactElementNode) {
    this._installElement(element);
  }

  _installElement(element: MyReactElementNode) {
    const { key, ref, nodeType, elementType, pendingProps } = getTypeFromElementNode(element);

    this.ref = ref;

    this.key = key;

    this.type = nodeType;

    this.element = element;

    this.elementType = elementType;

    this.pendingProps = pendingProps;
  }
  _addDependence(instance: MyReactInternalInstance): void {
    this.dependence = this.dependence || new Set();

    this.dependence.add(instance);
  }
  _removeDependence(instance: MyReactInternalInstance): void {
    this.dependence.delete(instance);
  }
  _unmount(): void {
    if (this.state & STATE_TYPE.__unmount__) return;

    this.hookList?.listToFoot((h) => h._unmount());

    this.instance && this.instance._unmount();

    this.patch = PATCH_TYPE.__initial__;

    this.state = STATE_TYPE.__initial__;
  }
  _prepare(): void {
    const currentIsSync = enableSyncFlush.current;

    const renderPlatform = currentRenderPlatform.current;

    const callBack = () => {
      const needUpdate = this.type & NODE_TYPE.__class__ ? processClassComponentUpdateQueue(this) : processFunctionComponentUpdateQueue(this);

      if (needUpdate) this._update(currentIsSync ? STATE_TYPE.__triggerSync__ : STATE_TYPE.__triggerConcurrent__);
    };

    renderPlatform.microTask(callBack);
  }
  _update(state?: STATE_TYPE) {
    if (this.state & STATE_TYPE.__unmount__) return;

    triggerUpdate(this, state || STATE_TYPE.__triggerSync__);
  }
  _error(error: Error) {
    if (this.state & STATE_TYPE.__unmount__) return;

    triggerError(this, error);
  }
  _revert(cb?: () => void) {
    if (this.state & STATE_TYPE.__unmount__) return;

    if (!(this.type & NODE_TYPE.__class__)) return;

    const instance = this.instance as MyReactComponent;

    instance?.setState(this.memoizedState?.revertState, cb);
  }
  _clone() {
    const newFiber = new MyReactFiberNode(this.element);

    const typedFiberContainerThis = this as unknown as MyReactFiberContainer;

    const typedFiberContainerNew = newFiber as unknown as MyReactFiberContainer;

    newFiber.state = this.state;

    newFiber.nativeNode = this.nativeNode;

    if (this.dependence) {
      newFiber.dependence = new Set(this.dependence);
    }

    if (typedFiberContainerThis.containerNode) {
      typedFiberContainerNew.containerNode = typedFiberContainerThis.containerNode;
    }
  }
}

export interface MyReactFiberContainer extends MyReactFiberNode {
  containerNode: NativeNode;
}
