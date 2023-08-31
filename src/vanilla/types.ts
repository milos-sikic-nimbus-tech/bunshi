import type { MoleculeScope } from "./scope";

export type ScopeTuple<T> = [MoleculeScope<T>, T];

export type AnyMoleculeScope = MoleculeScope<unknown>;
export type AnyScopeValue = unknown;
export type AnyScopeTuple = ScopeTuple<unknown>;
