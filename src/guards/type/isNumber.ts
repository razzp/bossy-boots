/**
 * Check that a value has a type of `number`.
 *
 * @param value - The value to assert
 * @returns `true` if check passes, otherwise `false`
 *
 * @public
 */
function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}

export { isNumber };
