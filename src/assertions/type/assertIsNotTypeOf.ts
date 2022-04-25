import { isTypeOf } from '../../guards/type/isTypeOf';
import { AssertionError } from '../../internal/AssertionError';

import type { TypeMap } from '../../interfaces/TypeMap';
import type { NotTypeOf } from '../../aliases/NotTypeOf';

function assertIsNotTypeOf<T, U extends (keyof TypeMap)[]>(
    value: T,
    ...types: U
): asserts value is NotTypeOf<T, U> {
    if (isTypeOf(value, ...types)) {
        throw new AssertionError(
            `Value should not be of type ${typeof value}.`
        );
    }
}

export { assertIsNotTypeOf };
