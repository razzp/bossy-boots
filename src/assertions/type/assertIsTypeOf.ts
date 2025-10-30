import { isNotTypeOf } from '../../guards/type/isNotTypeOf';
import { AssertionError } from '../../AssertionError';
import { toReadableList } from '../../internal/toReadableList';

import type { TypeOf } from '../../aliases/TypeOf';
import type { Primitive } from '../../aliases/Primitive';

/**
 * Assert that a value's type matches one or more types.
 *
 * @param value - The value to assert
 * @param types - The types(s) to check
 *
 * @public
 */
function assertIsTypeOf<T extends Primitive[]>(
    value: unknown,
    ...types: T
): asserts value is TypeOf<T> {
    if (isNotTypeOf(value, ...types)) {
        throw new AssertionError(`Value should be ${toReadableList(types)}`);
    }
}

export { assertIsTypeOf };
