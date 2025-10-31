/**
 * Check that a value has a type of `symbol`.
 *
 * @param value - The value to assert
 * @returns `true` if check passes, otherwise `false`
 *
 * @public
 */
function isSymbol(value: unknown): value is symbol {
    return typeof value === 'symbol';
}

export { isSymbol };
