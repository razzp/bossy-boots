import { isInstanceOf } from './isInstanceOf';

/**
 * Check that value is an instance of `Element`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isElement(value: unknown): value is Element {
    return isInstanceOf(value, Element);
}

export { isElement };
