import { isNull } from './isNull';
import { isUndefined } from './isUndefined';

/**
 * Check that a value has a type of `null` or `undefined`.
 * @memberof Guards.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNullish(value: unknown): value is null | undefined {
    return isNull(value) || isUndefined(value);
}

export { isNullish };
