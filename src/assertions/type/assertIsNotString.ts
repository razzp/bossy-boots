import { isString } from '../../guards/type/isString';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Assert that a value *does not* have a type of `string`.
 * @memberof Assertions.Type
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsNotString<TValue>(
    value: TValue
): asserts value is NotTypeOf<TValue, 'string'> {
    if (isString(value)) {
        throw new AssertionError('Value should not be string');
    }
}

export { assertIsNotString };
