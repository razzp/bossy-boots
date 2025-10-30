import { isNullish } from './isNullish';

/**
 * Check that a value *does not* have a type of `null` or `undefined`.
 *
 * @param value - The value to assert
 * @returns `true` if check passes, otherwise `false`
 * 
 * @public
 */
function isNotNullish<T>(value: T): value is NonNullable<T> {
    return !isNullish(value);
}

export { isNotNullish };
