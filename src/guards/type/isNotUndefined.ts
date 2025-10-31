import { isUndefined } from './isUndefined';

/**
 * Check that a value *does not* have a type of `undefined`.
 *
 * @param value - The value to assert
 * @returns `true` if check passes, otherwise `false`
 *
 * @public
 */
function isNotUndefined<T>(value: T): value is Exclude<T, undefined> {
    return !isUndefined(value);
}

export { isNotUndefined };
