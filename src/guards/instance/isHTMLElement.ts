import { isInstanceOf } from './isInstanceOf';

/**
 * Check that a value is an instance of `HTMLElement`.
 * @memberof Guards.Instance
 * @since 1.2.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isHTMLElement(value: unknown): value is HTMLElement {
    return isInstanceOf(value, HTMLElement);
}

export { isHTMLElement };
