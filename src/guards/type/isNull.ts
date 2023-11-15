/**
 * Check that a value has a type of `null`.
 * @memberof Guards.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNull(value: unknown): value is null {
    return value === null;
}

export { isNull };
