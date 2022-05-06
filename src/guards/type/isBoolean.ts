/**
 * Check that a value has a type of `boolean`.
 * @memberof Guards.Type
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean';
}

export { isBoolean };
