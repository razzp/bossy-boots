/**
 * Check that a value has a type of `undefined`.
 * @memberof Guards.Type
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isUndefined(value: unknown): value is undefined {
    return typeof value === 'undefined';
}

export { isUndefined };
