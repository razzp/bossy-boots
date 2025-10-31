/**
 * Check that a value has a type of `bigint`.
 *
 * @param value - The value to assert
 * @returns `true` if check passes, otherwise `false`
 *
 * @public
 */
function isBigInt(value: unknown): value is bigint {
    return typeof value === 'bigint';
}

export { isBigInt };
