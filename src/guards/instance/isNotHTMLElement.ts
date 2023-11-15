import { isHTMLElement } from './isHTMLElement';

import type { NotInstanceOf } from '../../aliases/NotInstanceOf';

/**
 * Check that a value is *not* an instance of `HTMLElement`.
 * @memberof Guards.Instance
 * @since 1.2.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNotHTMLElement<TValue>(
    value: TValue
): value is NotInstanceOf<TValue, typeof HTMLElement> {
    return !isHTMLElement(value);
}

export { isNotHTMLElement };
