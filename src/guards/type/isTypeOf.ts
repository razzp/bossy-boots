import type { TypeOf } from '../../aliases/TypeOf';
import type { TypeMap } from '../../interfaces/TypeMap';

function isTypeOf<T extends (keyof TypeMap)[]>(
    value: unknown,
    ...types: T
): value is TypeOf<T> {
    return types.some((type) => typeof value === type);
}

export { isTypeOf };
