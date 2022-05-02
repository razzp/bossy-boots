/**
 * Check that value has a type of `undefined`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isUndefined(value: unknown): value is undefined {
    return typeof value === 'undefined';
}

export { isUndefined };
