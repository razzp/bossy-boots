import { isNull } from './isNull';
import { isUndefined } from './isUndefined';

/**
 * Check that a value has a type of `null` or `undefined`.
 *
 * @param value - The value to assert
 * @returns `true` if check passes, otherwise `false`
 *
 * @public
 */
function isNullish(value: unknown): value is null | undefined {
    return isNull(value) || isUndefined(value);
}

export { isNullish };
