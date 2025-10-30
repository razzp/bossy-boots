import { isInstanceOf } from '../../guards/instance/isInstanceOf';
import { AssertionError } from '../../AssertionError';

import type { InstanceOf } from '../../aliases/InstanceOf';

/**
 * Assert that a value is *not* an instance of one or more prototypes.
 *
 * @param value - The value to assert
 * @param prototypes - The prototype(s) to check
 *
 * @public
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
