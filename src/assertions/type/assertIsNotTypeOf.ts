import { isTypeOf } from '../../guards/type/isTypeOf';
import { AssertionError } from '../../internal/AssertionError';

import type { Primitive } from '../../aliases/Primitive';
import type { TypeOf } from '../../aliases/TypeOf';

/**
 * Assert that a value's type *does not* match one or more types.
 * @memberof Assertions.Type
 * @since 1.0.0
 *
 * @example
 * function foo(input: string | number | symbol | boolean) {
 *     try {
 *         assertIsNotTypeOf(input, 'number', 'boolean');
 *         input; // string | symbol
 *     } catch (error) {}
 * }
 *
 * @param {unknown} value The value to assert
 * @param {Array.<Primitive>} types The types(s) to check
 *
 * @returns {void}
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
