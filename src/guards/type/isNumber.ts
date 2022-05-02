/**
 * Check that value has a type of `number`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}

export { isNumber };
