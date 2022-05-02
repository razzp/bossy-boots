import { isSymbol } from '../../guards/type/isSymbol';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

/**
 * Assert that value *does not* have a type of `symbol`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 */
function assertIsNotSymbol<TValue>(
    value: TValue
): asserts value is NotTypeOf<TValue, 'symbol'> {
    if (isSymbol(value)) {
        throw new AssertionError('Value should not be symbol');
    }
}

export { assertIsNotSymbol };
