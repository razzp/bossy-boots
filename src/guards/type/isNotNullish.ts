import { isNullish } from './isNullish';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Check that value *does not* have a type of `null` or `undefined`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isNotNullish<TValue>(
    value: TValue
): value is NotTypeOf<TValue, 'null' | 'undefined'> {
    return !isNullish(value);
}

export { isNotNullish };
