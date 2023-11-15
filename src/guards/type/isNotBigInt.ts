import { isBigInt } from './isBigInt';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Check that a value *does not* have a type of `bigint`.
 * @memberof Guards.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNotBigInt<TValue>(
    value: TValue
): value is NotTypeOf<TValue, 'bigint'> {
    return !isBigInt(value);
}

export { isNotBigInt };
