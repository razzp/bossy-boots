import { isHTMLElement } from './isHTMLElement';

/**
 * Check that a value is *not* an instance of `HTMLElement`.
 * @memberof Guards.Instance
 * @since 1.2.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNotHTMLElement<T>(
    value: T
): value is Exclude<T, InstanceType<typeof HTMLElement>> {
    return !isHTMLElement(value);
}

export { isNotHTMLElement };
