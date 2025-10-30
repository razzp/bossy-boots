import { isBoolean } from './isBoolean';

/**
 * Check that a value *does not* have a type of `boolean`.
 *
 * @param value - The value to assert
 * @returns `true` if check passes, otherwise `false`
 * 
 * @public
 */
function isNotBoolean<T>(value: T): value is Exclude<T, boolean> {
    return !isBoolean(value);
}

export { isNotBoolean };
