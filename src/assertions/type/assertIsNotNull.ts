import { isNull } from '../../guards/type/isNull';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Assert that a value *does not* have a type of `null`.
 * @memberof Assertions.Type
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsNotNull<TValue>(
    value: TValue
): asserts value is NotTypeOf<TValue, 'null'> {
    if (isNull(value)) {
        throw new AssertionError('Value should not be null');
    }
}

export { assertIsNotNull };
