/**
 * Check that a value has a type of `string`.
 *
 * @param value - The value to assert
 * @returns `true` if check passes, otherwise `false`
 *
 * @public
 */
function isString(value: unknown): value is string {
    return typeof value === 'string';
}

export { isString };
