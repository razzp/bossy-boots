import { isNumber } from './isNumber';

/**
 * Check that a value *does not* have a type of `number`.
 *
 * @param value - The value to assert
 * @returns `true` if check passes, otherwise `false`
 *
 * @public
 */
function isNotNumber<T>(value: T): value is Exclude<T, number> {
    return !isNumber(value);
}

export { isNotNumber };
