/**
 * Check that a value has a type of `number`.
 * @memberof Guards.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}

export { isNumber };
