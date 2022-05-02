import { isNull } from './isNull';
import { isUndefined } from './isUndefined';

/**
 * Check that value has a type of `null` or `undefined`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isNullish(value: unknown): value is null | undefined {
    return isNull(value) || isUndefined(value);
}

export { isNullish };
