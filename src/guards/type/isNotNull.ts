import { isNull } from './isNull';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Check that value *does not* have a type of `null`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isNotNull<TValue>(value: TValue): value is NotTypeOf<TValue, 'null'> {
    return !isNull(value);
}

export { isNotNull };
