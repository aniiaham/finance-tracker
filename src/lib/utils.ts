import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createEffect } from "solid-js";
import { createStore } from "solid-js/store";
import type { Store, SetStoreFunction } from "solid-js/store";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createLocalStore<T extends object>(
  name: string,
  init: T
): [Store<T>, SetStoreFunction<T>] {
  const localState = localStorage.getItem(name);

  const [state, setState] = createStore<T>(
    localState ? JSON.parse(localState) : init
  );

  createEffect(() => localStorage.setItem(name, JSON.stringify(state)));

  return [state, setState];
}

export function removeIndex<T>(array: readonly T[], index: number): T[] {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}
