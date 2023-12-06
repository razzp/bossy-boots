import { isString } from './isString';

/**
 * Check that a value *does not* have a type of `string`.
 * @memberof Guards.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNotString<T>(value: T): value is Exclude<T, string> {
    return !isString(value);
}

export { isNotString };
