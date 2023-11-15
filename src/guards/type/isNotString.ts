import { isString } from './isString';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Check that a value *does not* have a type of `string`.
 * @memberof Guards.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNotString<TValue>(
    value: TValue
): value is NotTypeOf<TValue, 'string'> {
    return !isString(value);
}

export { isNotString };
