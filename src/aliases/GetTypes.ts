import type { PrimitivesMap } from '../interfaces/PrimitivesMap';

type GetTypes<T> = T extends Array<infer X>
    ? GetTypes<X>
    : T extends keyof PrimitivesMap
    ? PrimitivesMap[T]
    : never;

export { GetTypes };
