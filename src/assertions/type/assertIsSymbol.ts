import { isNotSymbol } from '../../guards/type/isNotSymbol';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that value has a type of `symbol`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 */
function assertIsSymbol(value: unknown): asserts value is symbol {
    if (isNotSymbol(value)) {
        throw new AssertionError('Value should be symbol');
    }
}

export { assertIsSymbol };
