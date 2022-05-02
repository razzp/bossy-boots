import { isNumber } from '../../guards/type/isNumber';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Assert that value *does not* have a type of `number`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 */
function assertIsNotNumber<TValue>(
    value: TValue
): asserts value is NotTypeOf<TValue, 'number'> {
    if (isNumber(value)) {
        throw new AssertionError('Value should not be number');
    }
}

export { assertIsNotNumber };
