import { isSymbol } from './isSymbol';

/**
 * Check that a value *does not* have a type of `symbol`.
 *
 * @param value - The value to assert
 * @returns `true` if check passes, otherwise `false`
 *
 * @public
 */
function isNotSymbol<T>(value: T): value is Exclude<T, symbol> {
    return !isSymbol(value);
}

export { isNotSymbol };
