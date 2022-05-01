import type { TypeOf } from '../../aliases/TypeOf';
import type { PrimitivesMap } from '../../interfaces/PrimitivesMap';

function isTypeOf<TTypes extends (keyof PrimitivesMap)[]>(
    value: unknown,
    ...types: TTypes
): value is TypeOf<TTypes> {
    return types.some((type) => typeof value === type);
}

export { isTypeOf };
