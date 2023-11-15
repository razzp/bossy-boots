import { isNull } from './isNull';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Check that a value *does not* have a type of `null`.
 * @memberof Guards.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNotNull<TValue>(value: TValue): value is NotTypeOf<TValue, 'null'> {
    return !isNull(value);
}

export { isNotNull };
