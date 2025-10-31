import type { Primitive } from '../../aliases/Primitive';
import type { TypeOf } from '../../aliases/TypeOf';
import { AssertionError } from '../../AssertionError';
import { isTypeOf } from '../../guards/type/isTypeOf';

/**
 * Assert that a value's type *does not* match one or more types.
 *
 * @param value - The value to assert
 * @param types - The types(s) to check
 *
 * @public
 */
function assertIsNotTypeOf<T, U extends Primitive[]>(
    value: T,
    ...types: U
): asserts value is Exclude<T, TypeOf<U>> {
    if (isTypeOf(value, ...types)) {
        throw new AssertionError(`Value should not be ${typeof value}`);
    }
}

export { assertIsNotTypeOf };
