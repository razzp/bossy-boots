import { isInstanceOf } from '../../guards/instance/isInstanceOf';
import { AssertionError } from '../../internal/AssertionError';

import type { NotInstanceOf } from '../../aliases/NotInstanceOf';

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
function assertIsNotInstanceOf<TValue, TPrototypes extends Function[]>(
    value: TValue,
    ...prototypes: TPrototypes
): asserts value is NotInstanceOf<TValue, TPrototypes> {
    if (isInstanceOf(value, ...prototypes)) {
        throw new AssertionError(`Value should not be ${value.name}`);
    }
}

export { assertIsNotInstanceOf };
