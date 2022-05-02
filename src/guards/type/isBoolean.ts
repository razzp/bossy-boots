/**
 * Check that value has a type of `boolean`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean';
}

export { isBoolean };
