import { isSymbol } from './isSymbol';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Check that value *does not* have a type of `symbol`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isNotSymbol<TValue>(
    value: TValue
): value is NotTypeOf<TValue, 'symbol'> {
    return !isSymbol(value);
}

export { isNotSymbol };