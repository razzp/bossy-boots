import { isElement } from './isElement';

import type { NotInstanceOf } from '../../aliases/NotInstanceOf';

/**
 * Check that value is *not* an instance of `Element`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isNotElement<TValue>(
    value: TValue
): value is NotInstanceOf<TValue, typeof Element> {
    return !isElement(value);
}

export { isNotElement };
