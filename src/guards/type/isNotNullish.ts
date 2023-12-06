import { isNullish } from './isNullish';

/**
 * Check that a value *does not* have a type of `null` or `undefined`.
 * @memberof Guards.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNotNullish<T>(value: T): value is NonNullable<T> {
    return !isNullish(value);
}

export { isNotNullish };
