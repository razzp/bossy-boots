import { isNumber } from '../../guards/type/isNumber';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Assert that a value *does not* have a type of `number`.
 * @memberof Assertions.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsNotNumber<TValue>(
    value: TValue
): asserts value is NotTypeOf<TValue, 'number'> {
    if (isNumber(value)) {
        throw new AssertionError('Value should not be number');
    }
}

export { assertIsNotNumber };
