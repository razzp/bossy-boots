import { isInstanceOf } from './isInstanceOf';

/**
 * Check that a value is an instance of `Element`.
 * @memberof Guards.Instance
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isElement(value: unknown): value is Element {
    return isInstanceOf(value, Element);
}

export { isElement };
