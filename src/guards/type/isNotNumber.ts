import { isNumber } from './isNumber';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Check that value *does not* have a type of `number`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isNotNumber<TValue>(
    value: TValue
): value is NotTypeOf<TValue, 'number'> {
    return !isNumber(value);
}

export { isNotNumber };
