import { isBigInt } from './isBigInt';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Check that value *does not* have a type of `bigint`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isNotBigInt<TValue>(
    value: TValue
): value is NotTypeOf<TValue, 'bigint'> {
    return !isBigInt(value);
}

export { isNotBigInt };
