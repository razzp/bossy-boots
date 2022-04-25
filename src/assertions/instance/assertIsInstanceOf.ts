import { isNotInstanceOf } from '../../guards/instance/isNotInstanceOf';
import { AssertionError } from '../../internal/AssertionError';
import { toReadableList } from '../../internal/toReadableList';

import type { InstanceOf } from '../../aliases/InstanceOf';

function assertIsInstanceOf<T extends Function[]>(
    value: unknown,
    ...funcs: T
): asserts value is InstanceOf<T> {
    if (isNotInstanceOf(value, ...funcs)) {
        const expected = toReadableList(funcs.map((func) => func.name));

        throw new AssertionError(`Value should be an instance of ${expected}.`);
    }
}

export { assertIsInstanceOf };
