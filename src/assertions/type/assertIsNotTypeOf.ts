import { isTypeOf } from '../../guards/type/isTypeOf';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';
import type { Primitive } from '../../aliases/Primitive';

/**
 * Assert that value's type *does not* match one or more types.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 * @param {Array.<boolean|bigint|null|number|string|symbol|undefined>} types The types(s) to check
 */
function assertIsNotTypeOf<TValue, TTypes extends Primitive[]>(
    value: TValue,
    ...types: TTypes
): asserts value is NotTypeOf<TValue, TTypes> {
    if (isTypeOf(value, ...types)) {
        throw new AssertionError(`Value should not be ${typeof value}`);
    }
}

export { assertIsNotTypeOf };
