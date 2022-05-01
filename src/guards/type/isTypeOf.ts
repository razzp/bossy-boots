import type { Primitive } from '../../aliases/Primitive';
import type { TypeOf } from '../../aliases/TypeOf';

function isTypeOf<TTypes extends Primitive[]>(
    value: unknown,
    ...types: TTypes
): value is TypeOf<TTypes> {
    return types.some((type) => typeof value === type);
}

export { isTypeOf };
