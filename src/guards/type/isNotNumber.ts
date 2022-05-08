import { isNumber } from './isNumber';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Check that a value *does not* have a type of `number`.
 * @memberof Guards.Type
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNotNumber<TValue>(
    value: TValue
): value is NotTypeOf<TValue, 'number'> {
    return !isNumber(value);
}

export { isNotNumber };
