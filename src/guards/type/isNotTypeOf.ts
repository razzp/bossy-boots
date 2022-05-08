import { isTypeOf } from './isTypeOf';

import type { NotTypeOf } from '../../aliases/NotTypeOf';
import type { Primitive } from '../../aliases/Primitive';

/**
 * Check that a value's type *does not* match one or more types.
 * @memberof Guards.Type
 * @since 0.1.0
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
function isNotTypeOf<TValue, TTypes extends Primitive[]>(
    value: TValue,
    ...types: TTypes
): value is NotTypeOf<TValue, TTypes> {
    return !isTypeOf(value, ...types);
}

export { isNotTypeOf };
