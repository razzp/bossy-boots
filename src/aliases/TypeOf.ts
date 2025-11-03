import type { Primitive, PrimitiveMap } from './Primitive';

/**
 * @public
 */
type TypeOf<T> = T extends Array<infer X>
    ? TypeOf<X>
    : T extends Primitive
      ? PrimitiveMap[T]
      : never;

export type { TypeOf };
