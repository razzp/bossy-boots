import { isUndefined } from './isUndefined';

/**
 * Check that a value *does not* have a type of `undefined`.
 * @memberof Guards.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNotUndefined<T>(value: T): value is Exclude<T, undefined> {
    return !isUndefined(value);
}

export { isNotUndefined };
