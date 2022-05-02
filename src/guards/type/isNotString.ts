import { isString } from './isString';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Check that value *does not* have a type of `string`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isNotString<TValue>(
    value: TValue
): value is NotTypeOf<TValue, 'string'> {
    return !isString(value);
}

export { isNotString };
