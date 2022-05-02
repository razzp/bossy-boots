import { isUndefined } from './isUndefined';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Check that value *does not* have a type of `undefined`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isNotUndefined<TValue>(
    value: TValue
): value is NotTypeOf<TValue, 'undefined'> {
    return !isUndefined(value);
}

export { isNotUndefined };
