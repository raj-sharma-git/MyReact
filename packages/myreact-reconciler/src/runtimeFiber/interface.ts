import type { MyReactFiberNode } from "./instance";
import type { MyReactHookNode } from "../runtimeHook";
import type { MaybeArrayMyReactElementNode, MyReactElementNode, UpdateQueue } from "@my-react/react";
import type { HOOK_TYPE, ListTree } from "@my-react/react-shared";

export interface MyReactFiberNodeDev extends MyReactFiberNode {
  _debugRenderState: { renderCount: number; mountTime: number; prevUpdateTime: number; currentUpdateTime: number };

  _debugHookTypes: HOOK_TYPE[];

  _debugHookNodes: MyReactHookNode[];

  _debugContextMap: Record<string, MyReactFiberNode>;

  _debugDynamicChildren: MaybeArrayMyReactElementNode;

  _debugChildren: MyReactFiberNode[];

  _debugSuspense: MyReactElementNode;

  _debugStrict: boolean;

  _debugScope: MyReactFiberNode;

  _debugEventMap: Record<string, ((...args: any[]) => void) & { cb?: any[] }>;

  _debugErrorBoundaries: MyReactFiberNode;

  _debugUpdateQueue: ListTree<UpdateQueue>;
}
