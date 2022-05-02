import { isUndefined } from '../../guards/type/isUndefined';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Assert that value *does not* have a type of `undefined`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 */
function assertIsNotUndefined<TValue>(
    value: TValue
): asserts value is NotTypeOf<TValue, 'undefined'> {
    if (isUndefined(value)) {
        throw new AssertionError('Value should not be undefined');
    }
}

export { assertIsNotUndefined };
