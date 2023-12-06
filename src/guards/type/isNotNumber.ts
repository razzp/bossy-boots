import { isNumber } from './isNumber';

/**
 * Check that a value *does not* have a type of `number`.
 * @memberof Guards.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNotNumber<T>(value: T): value is Exclude<T, number> {
    return !isNumber(value);
}

export { isNotNumber };
