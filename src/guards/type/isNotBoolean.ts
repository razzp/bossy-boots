import { isBoolean } from './isBoolean';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Check that value *does not* have a type of `boolean`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isNotBoolean<TValue>(
    value: TValue
): value is NotTypeOf<TValue, 'boolean'> {
    return !isBoolean(value);
}

export { isNotBoolean };
