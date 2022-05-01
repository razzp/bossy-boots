import { isNotInstanceOf } from '../../guards/instance/isNotInstanceOf';
import { AssertionError } from '../../internal/AssertionError';
import { toReadableList } from '../../internal/toReadableList';

import type { InstanceOf } from '../../aliases/InstanceOf';

function assertIsInstanceOf<TInstances extends Function[]>(
    value: unknown,
    ...instances: TInstances
): asserts value is InstanceOf<TInstances> {
    if (isNotInstanceOf(value, ...instances)) {
        const expected = toReadableList(instances.map(({ name }) => name));

        throw new AssertionError(`Value should be an instance of ${expected}.`);
    }
}

export { assertIsInstanceOf };
