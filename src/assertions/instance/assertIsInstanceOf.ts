import { isNotInstanceOf } from '../../guards/instance/isNotInstanceOf';
import { AssertionError } from '../../internal/AssertionError';
import { toReadableList } from '../../internal/toReadableList';

import type { InstanceOf } from '../../aliases/InstanceOf';

/**
 * Assert that a value is an instance of one or more prototypes.
 * @memberof Assertions.Instance
 * @since 1.0.0
 *
 * @example
 * function foo(input: Red | Yellow | Green | Blue) {
 *     try {
 *         assertIsInstanceOf(input, Yellow, Blue);
 *         input; // Yellow | Blue
 *     } catch (error) {}
 * }
 *
 * @param {unknown} value The value to assert
 * @param {Function[]} prototypes The prototype(s) to check
 *
 * @returns {void}
 */
function assertIsInstanceOf<T extends Function[]>(
    value: unknown,
    ...prototypes: T
): asserts value is InstanceOf<T> {
    if (isNotInstanceOf(value, ...prototypes)) {
        throw new AssertionError(
            `Value should be ${toReadableList(
                prototypes.map(({ name }) => name)
            )}`
        );
    }
}

export { assertIsInstanceOf };
