import { isInstanceOf } from '../../guards/instance/isInstanceOf';
import { AssertionError } from '../../internal/AssertionError';

import type { NotInstanceOf } from '../../aliases/NotInstanceOf';

function assertIsNotInstanceOf<TValue, TPrototypes extends Function[]>(
    value: TValue,
    ...prototypes: TPrototypes
): asserts value is NotInstanceOf<TValue, TPrototypes> {
    if (isInstanceOf(value, ...prototypes)) {
        throw new AssertionError(`Value should not be ${value.name}`);
    }
}

export { assertIsNotInstanceOf };
