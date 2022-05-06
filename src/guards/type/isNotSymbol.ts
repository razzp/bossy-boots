import { isSymbol } from './isSymbol';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Check that a value *does not* have a type of `symbol`.
 * @memberof Guards.Type
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNotSymbol<TValue>(
    value: TValue
): value is NotTypeOf<TValue, 'symbol'> {
    return !isSymbol(value);
}

export { isNotSymbol };
