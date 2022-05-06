import { isUndefined } from '../../guards/type/isUndefined';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Assert that a value *does not* have a type of `undefined`.
 * @memberof Assertions.Type
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsNotUndefined<TValue>(
    value: TValue
): asserts value is NotTypeOf<TValue, 'undefined'> {
    if (isUndefined(value)) {
        throw new AssertionError('Value should not be undefined');
    }
}

export { assertIsNotUndefined };
