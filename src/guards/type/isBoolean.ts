/**
 * Check that a value has a type of `boolean`.
 *
 * @param value - The value to assert
 * @returns `true` if check passes, otherwise `false`
 *
 * @public
 */
function isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean';
}

export { isBoolean };
