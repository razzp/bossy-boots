import { isNotInstanceOf } from '../../guards/instance/isNotInstanceOf';
import { AssertionError } from '../../internal/AssertionError';
import { toReadableList } from '../../internal/toReadableList';

import type { InstanceOf } from '../../aliases/InstanceOf';

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
