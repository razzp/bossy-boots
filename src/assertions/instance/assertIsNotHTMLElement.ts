import { isHTMLElement } from '../../guards/instance/isHTMLElement';
import { AssertionError } from '../../internal/AssertionError';

import type { NotInstanceOf } from '../../aliases/NotInstanceOf';

/**
 * Assert that a value is *not* an instance of `HTMLElement`.
 * @memberof Assertions.Instance
 * @since 1.2.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsNotHTMLElement<TValue>(
    value: TValue
): asserts value is NotInstanceOf<TValue, typeof HTMLElement> {
    if (isHTMLElement(value)) {
        throw new AssertionError('Value should not be HTMLElement');
    }
}

export { assertIsNotHTMLElement };
