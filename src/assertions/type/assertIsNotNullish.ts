import { isNullish } from '../../guards/type/isNullish';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Assert that value *does not* have a type of `null` or `undefined`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 */
function assertIsNotNullish<TValue>(
    value: TValue
): asserts value is NotTypeOf<TValue, 'null' | 'undefined'> {
    if (isNullish(value)) {
        throw new AssertionError(`Value should not be null or undefined`);
    }
}

export { assertIsNotNullish };
