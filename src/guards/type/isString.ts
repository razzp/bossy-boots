/**
 * Check that value has a type of `string`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isString(value: unknown): value is string {
    return typeof value === 'string';
}

export { isString };
