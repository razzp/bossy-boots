import { isSymbol } from './isSymbol';

/**
 * Check that a value *does not* have a type of `symbol`.
 * @memberof Guards.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNotSymbol<T>(value: T): value is Exclude<T, symbol> {
    return !isSymbol(value);
}

export { isNotSymbol };
