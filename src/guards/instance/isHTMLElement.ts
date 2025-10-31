import { isInstanceOf } from './isInstanceOf';

/**
 * Check that a value is an instance of `HTMLElement`.
 *
 * @param value - The value to assert
 * @returns `true` if check passes, otherwise `false`
 *
 * @public
 */
function isHTMLElement(value: unknown): value is HTMLElement {
    return isInstanceOf(value, HTMLElement);
}

export { isHTMLElement };
