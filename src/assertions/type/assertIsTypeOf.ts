import { isNotTypeOf } from '../../guards/type/isNotTypeOf';
import { AssertionError } from '../../internal/AssertionError';
import { toReadableList } from '../../internal/toReadableList';

import type { TypeOf } from '../../aliases/TypeOf';
import type { Primitive } from '../../aliases/Primitive';

/**
 * Assert that a value's type matches one or more types.
 * @memberof Assertions.Type
 * @since 1.0.0
 *
 * @example
 * function foo(input: string | number | symbol | boolean) {
 *     try {
 *         assertIsTypeOf(input, 'number', 'boolean');
 *         input; // number | boolean
 *     } catch (error) {}
 * }
 *
 * @param {unknown} value The value to assert
 * @param {Array.<Primitive>} types The types(s) to check
 *
 * @returns {void}
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
