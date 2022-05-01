import { isInstanceOf } from '../../guards/instance/isInstanceOf';
import { AssertionError } from '../../internal/AssertionError';

import type { NotInstanceOf } from '../../aliases/NotInstanceOf';

function assertIsNotInstanceOf<TValue, TInstances extends Function[]>(
    value: TValue,
    ...instances: TInstances
): asserts value is NotInstanceOf<TValue, TInstances> {
    if (isInstanceOf(value, ...instances)) {
        throw new AssertionError(`Value should not be ${value.name}`);
    }
}

export { assertIsNotInstanceOf };
