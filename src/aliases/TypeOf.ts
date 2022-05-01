import type { PrimitivesMap } from '../interfaces/PrimitivesMap';
import type { Primitive } from './Primitive';

type TypeOf<T> = T extends Array<infer X>
    ? TypeOf<X>
    : T extends Primitive
    ? PrimitivesMap[T]
    : never;

export { TypeOf };
