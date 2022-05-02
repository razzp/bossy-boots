/**
 * Check that value has a type of `null`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isNull(value: unknown): value is null {
    return value === null;
}

export { isNull };
