/**
 * Check that a value has a type of `undefined`.
 *
 * @param value - The value to assert
 * @returns `true` if check passes, otherwise `false`
 * 
 * @public
 */
function isUndefined(value: unknown): value is undefined {
    return typeof value === 'undefined';
}

export { isUndefined };
