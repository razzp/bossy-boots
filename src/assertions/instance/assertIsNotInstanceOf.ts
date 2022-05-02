import { isInstanceOf } from '../../guards/instance/isInstanceOf';
import { AssertionError } from '../../internal/AssertionError';

import type { NotInstanceOf } from '../../aliases/NotInstanceOf';

/**
 * Assert that value is *not* an instance of one or more prototypes.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 * @param {Function[]} prototypes The prototype(s) to check
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
