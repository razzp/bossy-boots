import type { TypeOf } from '../../aliases/TypeOf';
import type { PrimitivesMap } from '../../interfaces/PrimitivesMap';

function isTypeOf<TValue, TTypes extends (keyof PrimitivesMap)[]>(
    value: TValue,
    ...types: TTypes
): value is TypeOf<TValue, TTypes> {
    return types.some((type) => typeof value === type);
}

export { isTypeOf };
