import { isUndefined } from './isUndefined';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Check that a value *does not* have a type of `undefined`.
 * @memberof Guards.Type
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNotUndefined<TValue>(
    value: TValue
): value is NotTypeOf<TValue, 'undefined'> {
    return !isUndefined(value);
}

export { isNotUndefined };
