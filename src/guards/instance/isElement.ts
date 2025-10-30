import { isInstanceOf } from './isInstanceOf';

/**
 * Check that a value is an instance of `Element`.
 *
 * @param value - The value to assert
 * @returns `true` if check passes, otherwise `false`
 * 
 * @public
 */
function isElement(value: unknown): value is Element {
    return isInstanceOf(value, Element);
}

export { isElement };
