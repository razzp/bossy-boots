import { isElement } from '../../guards/instance/isElement';
import { AssertionError } from '../../internal/AssertionError';

import type { NotInstanceOf } from '../../aliases/NotInstanceOf';

/**
 * Assert that value is *not* an instance of `Element`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 */
function assertIsNotElement<TValue>(
    value: TValue
): asserts value is NotInstanceOf<TValue, typeof Element> {
    if (isElement(value)) {
        throw new AssertionError('Value should not be Element');
    }
}

export { assertIsNotElement };
