import type { InstanceOf } from '../../aliases/InstanceOf';
import { AssertionError } from '../../AssertionError';
import { isNotInstanceOf } from '../../guards/instance/isNotInstanceOf';
import { toReadableList } from '../../internal/toReadableList';

/**
 * Assert that a value is an instance of one or more prototypes.
 *
 * @param value - The value to assert
 * @param prototypes - The prototype(s) to check
 *
 * @public
 */
function assertIsInstanceOf<T extends Function[]>(
    value: unknown,
    ...prototypes: T
): asserts value is InstanceOf<T> {
    if (isNotInstanceOf(value, ...prototypes)) {
        throw new AssertionError(
            `Value should be ${toReadableList(
                prototypes.map(({ name }) => name),
            )}`,
        );
    }
}

export { assertIsInstanceOf };
