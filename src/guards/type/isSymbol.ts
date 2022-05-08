/**
 * Check that a value has a type of `symbol`.
 * @memberof Guards.Type
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isSymbol(value: unknown): value is symbol {
    return typeof value === 'symbol';
}

export { isSymbol };
