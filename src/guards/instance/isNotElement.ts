import { isElement } from './isElement';

import type { NotInstanceOf } from '../../aliases/NotInstanceOf';

/**
 * Check that a value is *not* an instance of `Element`.
 * @memberof Guards.Instance
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNotElement<TValue>(
    value: TValue
): value is NotInstanceOf<TValue, typeof Element> {
    return !isElement(value);
}

export { isNotElement };
