import { isBoolean } from './isBoolean';

/**
 * Check that a value *does not* have a type of `boolean`.
 * @memberof Guards.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNotBoolean<T>(value: T): value is Exclude<T, boolean> {
    return !isBoolean(value);
}

export { isNotBoolean };
