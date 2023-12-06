import { isInstanceOf } from '../../guards/instance/isInstanceOf';
import { AssertionError } from '../../internal/AssertionError';

import type { InstanceOf } from '../../aliases/InstanceOf';

/**
 * Assert that a value is *not* an instance of one or more prototypes.
 * @memberof Assertions.Instance
 * @since 1.0.0
 *
 * @example
 * function foo(input: Red | Yellow | Green | Blue) {
 *     try {
 *         assertIsNotInstanceOf(input, Yellow, Blue);
 *         input; // Red | Green
 *     } catch (error) {}
 * }
 *
 * @param {unknown} value The value to assert
 * @param {Function[]} prototypes The prototype(s) to check
 *
 * @returns {void}
 */
function assertIsNotInstanceOf<T, U extends Function[]>(
    value: T,
    ...prototypes: U
): asserts value is Exclude<T, InstanceOf<U>> {
    if (isInstanceOf(value, ...prototypes)) {
        throw new AssertionError(`Value should not be ${value.name}`);
    }
}

export { assertIsNotInstanceOf };
