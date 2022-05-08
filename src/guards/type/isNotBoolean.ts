import { isBoolean } from './isBoolean';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Check that a value *does not* have a type of `boolean`.
 * @memberof Guards.Type
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNotBoolean<TValue>(
    value: TValue
): value is NotTypeOf<TValue, 'boolean'> {
    return !isBoolean(value);
}

export { isNotBoolean };
