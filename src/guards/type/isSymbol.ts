/**
 * Check that value has a type of `symbol`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isSymbol(value: unknown): value is symbol {
    return typeof value === 'symbol';
}

export { isSymbol };
