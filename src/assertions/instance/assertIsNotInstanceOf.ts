import { isInstanceOf } from '../../guards/instance/isInstanceOf';
import { AssertionError } from '../../internal/AssertionError';

import type { NotInstanceOf } from '../../aliases/NotInstanceOf';

function assertIsNotInstanceOf<T, U extends Function[]>(
    value: T,
    ...funcs: U
): asserts value is NotInstanceOf<T, U> {
    if (isInstanceOf(value, ...funcs)) {
        throw new AssertionError(
            `Value should not be an instance of ${value.name}.`
        );
    }
}

export { assertIsNotInstanceOf };
