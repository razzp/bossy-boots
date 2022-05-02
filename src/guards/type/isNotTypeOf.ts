import { isTypeOf } from './isTypeOf';

import type { NotTypeOf } from '../../aliases/NotTypeOf';
import type { Primitive } from '../../aliases/Primitive';

/**
 * Check that value's type *does not* match one or more types.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 * @param {Array.<boolean|bigint|null|number|string|symbol|undefined>} types The types(s) to check
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isNotTypeOf<TValue, TTypes extends Primitive[]>(
    value: TValue,
    ...types: TTypes
): value is NotTypeOf<TValue, TTypes> {
    return !isTypeOf(value, ...types);
}

export { isNotTypeOf };
