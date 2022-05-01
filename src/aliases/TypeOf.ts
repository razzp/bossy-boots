import type { PrimitivesMap } from '../interfaces/PrimitivesMap';

type TypeOf<T> = T extends Array<infer X>
    ? TypeOf<X>
    : T extends keyof PrimitivesMap
    ? PrimitivesMap[T]
    : never;

export { TypeOf };
