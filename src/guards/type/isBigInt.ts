/**
 * Check that value has a type of `bigint`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isBigInt(value: unknown): value is bigint {
    return typeof value === 'bigint';
}

export { isBigInt };
