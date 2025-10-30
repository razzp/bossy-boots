import { isNull } from './isNull';

/**
 * Check that a value *does not* have a type of `null`.
 *
 * @param value - The value to assert
 * @returns `true` if check passes, otherwise `false`
 * 
 * @public
 */
function isNotNull<T>(value: T): value is Exclude<T, null> {
    return !isNull(value);
}

export { isNotNull };
