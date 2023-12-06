import type { Primitive, PrimitiveMap } from './Primitive';

type TypeOf<T> = T extends Array<infer X>
    ? TypeOf<X>
    : T extends Primitive
    ? PrimitiveMap[T]
    : never;

export { TypeOf };
