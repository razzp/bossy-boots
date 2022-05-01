import { isTypeOf } from '../../guards/type/isTypeOf';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';
import type { Primitive } from '../../aliases/Primitive';

function assertIsNotTypeOf<TValue, TTypes extends Primitive[]>(
    value: TValue,
    ...types: TTypes
): asserts value is NotTypeOf<TValue, TTypes> {
    if (isTypeOf(value, ...types)) {
        throw new AssertionError(
            `Value should not be of type ${typeof value}.`
        );
    }
}

export { assertIsNotTypeOf };
