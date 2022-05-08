/**
 * Check that a value has a type of `string`.
 * @memberof Guards.Type
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isString(value: unknown): value is string {
    return typeof value === 'string';
}

export { isString };
