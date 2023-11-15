import { isSymbol } from '../../guards/type/isSymbol';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Assert that a value *does not* have a type of `symbol`.
 * @memberof Assertions.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsNotSymbol<TValue>(
    value: TValue
): asserts value is NotTypeOf<TValue, 'symbol'> {
    if (isSymbol(value)) {
        throw new AssertionError('Value should not be symbol');
    }
}

export { assertIsNotSymbol };
