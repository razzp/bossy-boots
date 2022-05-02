import { isNotTypeOf } from '../../guards/type/isNotTypeOf';
import { AssertionError } from '../../internal/AssertionError';
import { toReadableList } from '../../internal/toReadableList';

import type { TypeOf } from '../../aliases/TypeOf';
import type { Primitive } from '../../aliases/Primitive';

/**
 * Assert that value's type matches one or more types.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 * @param {Array.<boolean|bigint|null|number|string|symbol|undefined>} types The types(s) to check
 */
function assertIsTypeOf<TTypes extends Primitive[]>(
    value: unknown,
    ...types: TTypes
): asserts value is TypeOf<TTypes> {
    if (isNotTypeOf(value, ...types)) {
        throw new AssertionError(`Value should be ${toReadableList(types)}`);
    }
}

export { assertIsTypeOf };
