import { isNotInstanceOf } from '../../guards/instance/isNotInstanceOf';
import { AssertionError } from '../../internal/AssertionError';
import { toReadableList } from '../../internal/toReadableList';

import type { InstanceOf } from '../../aliases/InstanceOf';

/**
 * Assert that value is an instance of one or more prototypes.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 * @param {Function[]} prototypes The prototype(s) to check
 */
function assertIsInstanceOf<TPrototypes extends Function[]>(
    value: unknown,
    ...prototypes: TPrototypes
): asserts value is InstanceOf<TPrototypes> {
    if (isNotInstanceOf(value, ...prototypes)) {
        throw new AssertionError(
            `Value should be ${toReadableList(
                prototypes.map(({ name }) => name)
            )}`
        );
    }
}

export { assertIsInstanceOf };
