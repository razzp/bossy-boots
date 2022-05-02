import { isBigInt } from '../../guards/type/isBigInt';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Assert that value *does not* have a type of `bigint`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 */
function assertIsNotBigInt<TValue>(
    value: TValue
): asserts value is NotTypeOf<TValue, 'bigint'> {
    if (isBigInt(value)) {
        throw new AssertionError('Value should not be bigint');
    }
}

export { assertIsNotBigInt };
