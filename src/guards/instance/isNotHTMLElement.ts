import { isHTMLElement } from './isHTMLElement';

/**
 * Check that a value is *not* an instance of `HTMLElement`.
 *
 * @param value - The value to assert
 * @returns `true` if check passes, otherwise `false`
 *
 * @public
 */
function isNotHTMLElement<T>(
    value: T,
): value is Exclude<T, InstanceType<typeof HTMLElement>> {
    return !isHTMLElement(value);
}

export { isNotHTMLElement };
