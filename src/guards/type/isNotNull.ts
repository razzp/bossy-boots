import { isNull } from './isNull';

/**
 * Check that a value *does not* have a type of `null`.
 * @memberof Guards.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNotNull<T>(value: T): value is Exclude<T, null> {
    return !isNull(value);
}

export { isNotNull };
