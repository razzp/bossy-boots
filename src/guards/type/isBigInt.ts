/**
 * Check that a value has a type of `bigint`.
 * @memberof Guards.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isBigInt(value: unknown): value is bigint {
    return typeof value === 'bigint';
}

export { isBigInt };
