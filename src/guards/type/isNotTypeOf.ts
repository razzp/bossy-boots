import { isTypeOf } from './isTypeOf';

import type { Primitive } from '../../aliases/Primitive';
import type { TypeOf } from '../../aliases/TypeOf';

/**
 * Check that a value's type *does not* match one or more types.
 * @memberof Guards.Type
 * @since 1.0.0
 *
 * @example
 * function foo(input: string | number | symbol | boolean) {
 *     if (isNotTypeOf(input, 'number', 'boolean')) {
 *         input; // string | symbol
 *     }
 * }
 *
 * @param {unknown} value The value to assert
 * @param {Array.<Primitive>} types The types(s) to check
 *
 * @returns {boolean}
 */
function isNotTypeOf<T, U extends Primitive[]>(
    value: T,
    ...types: U
): value is Exclude<T, TypeOf<U>> {
    return !isTypeOf(value, ...types);
}

export { isNotTypeOf };
