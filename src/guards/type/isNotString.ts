import { isString } from './isString';

/**
 * Check that a value *does not* have a type of `string`.
 *
 * @param value - The value to assert
 * @returns `true` if check passes, otherwise `false`
 *
 * @public
 */
function isNotString<T>(value: T): value is Exclude<T, string> {
    return !isString(value);
}

export { isNotString };
