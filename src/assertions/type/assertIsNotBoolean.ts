import { isBoolean } from '../../guards/type/isBoolean';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Assert that a value *does not* have a type of `boolean`.
 * @memberof Assertions.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsNotBoolean<TValue>(
    value: TValue
): asserts value is NotTypeOf<TValue, 'boolean'> {
    if (isBoolean(value)) {
        throw new AssertionError('Value should not be boolean');
    }
}

export { assertIsNotBoolean };
