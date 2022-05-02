import { isString } from '../../guards/type/isString';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Assert that value *does not* have a type of `string`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 */
function assertIsNotString<TValue>(
    value: TValue
): asserts value is NotTypeOf<TValue, 'string'> {
    if (isString(value)) {
        throw new AssertionError('Value should not be string');
    }
}

export { assertIsNotString };
